const SYMBOLS = [
  { char: "π", label: "pi" },
  { char: "∞", label: "infinity" },
  { char: "√", label: "square root" },
  { char: "∫", label: "integral" },
  { char: "∂", label: "partial" },
  { char: "Δ", label: "delta" },
  { char: "θ", label: "theta" },
  { char: "α", label: "alpha" },
  { char: "β", label: "beta" },
  { char: "γ", label: "gamma" },
  { char: "λ", label: "lambda" },
  { char: "μ", label: "mu" },
  { char: "σ", label: "sigma" },
  { char: "Σ", label: "capital sigma" },
];

const TEMPLATES = [
  "d/dx x^n = n*x^(n-1)",
  "d/dx sin(x)=cos(x)",
  "d/dx cos(x)=-sin(x)",
  "d/dx e^x=e^x",
  "d/dx ln(x)=1/x",
];

const STORAGE_KEY = "formulas";

const symbolGrid = document.getElementById("symbolGrid");
const symbolToast = document.getElementById("symbolToast");
const formulaInput = document.getElementById("formulaInput");
const saveFormulaBtn = document.getElementById("saveFormulaBtn");
const formulaList = document.getElementById("formulaList");
const formulaEmpty = document.getElementById("formulaEmpty");
const converterInput = document.getElementById("converterInput");
const converterOutput = document.getElementById("converterOutput");
const copyLatexBtn = document.getElementById("copyLatexBtn");
const latexToast = document.getElementById("latexToast");
const templateList = document.getElementById("templateList");

let toastTimer = null;

function showToast(element) {
  clearTimeout(toastTimer);
  element.classList.add("show");
  toastTimer = setTimeout(() => element.classList.remove("show"), 1500);
}

async function copyToClipboard(text) {
  await navigator.clipboard.writeText(text);
}

function initSymbols() {
  SYMBOLS.forEach(({ char, label }) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "symbol-btn";
    btn.textContent = char;
    btn.title = `Copy ${label}`;
    btn.setAttribute("aria-label", `Copy ${label}`);
    btn.addEventListener("click", async () => {
      await copyToClipboard(char);
      showToast(symbolToast);
    });
    symbolGrid.appendChild(btn);
  });
}

function initTemplates() {
  TEMPLATES.forEach((template) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "template-btn";
    btn.textContent = template;
    btn.title = "Insert into Formula Notes";
    btn.addEventListener("click", () => {
      formulaInput.value = template;
      formulaInput.focus();
      formulaInput.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
    templateList.appendChild(btn);
  });
}

async function loadFormulas() {
  const result = await chrome.storage.local.get(STORAGE_KEY);
  return result[STORAGE_KEY] || [];
}

async function saveFormulas(formulas) {
  await chrome.storage.local.set({ [STORAGE_KEY]: formulas });
}

function renderFormulas(formulas) {
  formulaList.innerHTML = "";

  if (formulas.length === 0) {
    formulaEmpty.classList.remove("hidden");
    return;
  }

  formulaEmpty.classList.add("hidden");

  formulas.forEach((formula, index) => {
    const li = document.createElement("li");
    li.className = "formula-item";
    li.dataset.index = index;

    const textSpan = document.createElement("span");
    textSpan.className = "formula-text";
    textSpan.textContent = formula;

    const actions = document.createElement("div");
    actions.className = "formula-actions";

    const editBtn = document.createElement("button");
    editBtn.type = "button";
    editBtn.className = "btn btn-ghost";
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", () => startEditFormula(index, formula, li));

    const deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.className = "btn btn-danger";
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => deleteFormula(index));

    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);
    li.appendChild(textSpan);
    li.appendChild(actions);
    formulaList.appendChild(li);
  });
}

function startEditFormula(index, currentText, listItem) {
  listItem.classList.add("editing");
  listItem.innerHTML = "";

  const input = document.createElement("input");
  input.type = "text";
  input.className = "text-input";
  input.value = currentText;
  input.maxLength = 500;

  const actions = document.createElement("div");
  actions.className = "formula-actions";

  const saveBtn = document.createElement("button");
  saveBtn.type = "button";
  saveBtn.className = "btn btn-primary";
  saveBtn.textContent = "Save";
  saveBtn.addEventListener("click", async () => {
    const trimmed = input.value.trim();
    if (!trimmed) return;
    const formulas = await loadFormulas();
    formulas[index] = trimmed;
    await saveFormulas(formulas);
    renderFormulas(formulas);
  });

  const cancelBtn = document.createElement("button");
  cancelBtn.type = "button";
  cancelBtn.className = "btn btn-ghost";
  cancelBtn.textContent = "Cancel";
  cancelBtn.addEventListener("click", async () => {
    const formulas = await loadFormulas();
    renderFormulas(formulas);
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") saveBtn.click();
    if (e.key === "Escape") cancelBtn.click();
  });

  actions.appendChild(saveBtn);
  actions.appendChild(cancelBtn);
  listItem.appendChild(input);
  listItem.appendChild(actions);
  input.focus();
  input.select();
}

async function addFormula() {
  const text = formulaInput.value.trim();
  if (!text) return;

  const formulas = await loadFormulas();
  formulas.unshift(text);
  await saveFormulas(formulas);
  formulaInput.value = "";
  renderFormulas(formulas);
}

async function deleteFormula(index) {
  const formulas = await loadFormulas();
  formulas.splice(index, 1);
  await saveFormulas(formulas);
  renderFormulas(formulas);
}

function convertToLatex(input) {
  if (!input.trim()) return "";

  let s = input.trim();

  s = s.replace(/\bpi\b/gi, "\\pi");

  s = s.replace(/sqrt\(([^()]+)\)/gi, "\\sqrt{$1}");

  const funcs = ["sin", "cos", "tan", "ln", "log"];
  for (const func of funcs) {
    const powerPattern = new RegExp(
      `${func}\\(([^()]+)\\)\\^([\\w.+-]+)`,
      "gi"
    );
    s = s.replace(powerPattern, `\\${func}^$2($1)`);

    const plainPattern = new RegExp(`${func}\\(([^()]+)\\)`, "gi");
    s = s.replace(plainPattern, `\\${func}($1)`);
  }

  s = s.replace(/(\w+)\^\(([^)]+)\)/g, "$1^{$2}");
  s = s.replace(/(\w+)\^([\w.+-]+)/g, (match, base, exp) => {
    if (base.startsWith("\\")) return match;
    return `${base}^{${exp}}`;
  });

  s = s.replace(/\*/g, " \\cdot ");
  s = s.replace(/\s*\+\s*/g, "+");
  s = s.replace(/\s*-\s*/g, "-");
  s = s.replace(/\s*=\s*/g, "=");
  s = s.replace(/d\/dx\s*/g, "\\frac{d}{dx}");

  return s;
}

function updateConverter() {
  converterOutput.textContent = convertToLatex(converterInput.value);
}

function initConverter() {
  converterInput.addEventListener("input", updateConverter);
  updateConverter();

  copyLatexBtn.addEventListener("click", async () => {
    const text = converterOutput.textContent;
    if (!text) return;
    await copyToClipboard(text);
    showToast(latexToast);
  });
}

function initFormulaNotes() {
  saveFormulaBtn.addEventListener("click", addFormula);
  formulaInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") addFormula();
  });
}

async function init() {
  initSymbols();
  initTemplates();
  initConverter();
  initFormulaNotes();

  const formulas = await loadFormulas();
  renderFormulas(formulas);
}

document.addEventListener("DOMContentLoaded", init);
