# Math Formula Helper

Math Formula Helper is a lightweight Chrome extension designed for students, teachers, engineers, and STEM professionals.

It provides quick access to mathematical symbols, formula notes, LaTeX conversion tools, and useful calculus resources directly from your browser.

## Features

* Copy mathematical symbols with one click
* Save and manage formula notes
* Convert formulas into LaTeX-friendly format
* Access common derivative rules
* Open useful calculus resources

## Useful Resources

* Derivative Calculator: https://www.calculadora-derivadas.org
* Partial Derivative Calculator: https://www.calculadora-derivadas.org/calculadora-de-derivadas-parciales
* Chain Rule Calculator: https://www.calculadora-derivadas.org/regla-de-la-cadena

## Installation

1. Download or clone this repository.
2. Open Chrome and navigate to:
   chrome://extensions/
3. Enable Developer Mode.
4. Click **Load unpacked**.
5. Select the project folder.

## Technologies

* HTML
* CSS
* JavaScript
* Chrome Extension Manifest V3

## Website

For step-by-step derivative solutions and calculus tools, visit:

<<<<<<< HEAD
https://www.calculadora-derivadas.org
=======
4. **Load the extension**
   - Click **Load unpacked**
   - Select the `math formula helper` folder (the one containing `manifest.json`)

5. **Pin the extension** (optional)
   - Click the puzzle piece icon in the Chrome toolbar
   - Click the pin next to **Math Formula Helper**

6. **Use it**
   - Click the extension icon in the toolbar to open the popup

### Updating after changes

1. Go to `chrome://extensions/`
2. Click the **Reload** button on the Math Formula Helper card

---

## Chrome Web Store Submission

### Package the extension

1. Open `chrome://extensions/`
2. Enable **Developer mode**
3. Click **Pack extension**
4. Select this project folder as the extension root
5. Upload the generated `.zip` to the [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole)

### Required assets

| Asset | Specification |
|-------|---------------|
| Icons | Included: 16×16, 48×48, 128×128 PNG |
| Screenshots | At least 1 screenshot (1280×800 or 640×400 recommended) |
| Privacy policy | `https://www.calculadora-derivadas.org/privacy-policy` (see `privacy-policy/index.html`) |

### Permissions justification

- **storage** — Saves formula notes locally on the user's device only

---

## Chrome Web Store Listing

### Short description (max 132 characters)

Copy math symbols, save formulas, convert to LaTeX, and access calculus tools — all locally, no tracking.

### Long description

**Math Formula Helper** is a lightweight educational productivity tool built for students, teachers, engineers, and STEM professionals who work with mathematical notation every day.

**Math Symbol Library**
Instantly copy essential symbols including π, ∞, √, ∫, ∂, Δ, θ, α, β, γ, λ, μ, σ, and Σ. Each click copies the symbol to your clipboard with a quick confirmation.

**Formula Notes**
Save your frequently used formulas in one place. Add, edit, and delete entries freely. All notes are stored locally on your device using Chrome's built-in storage — nothing is sent to any server.

**Formula Converter**
Type formulas in plain text and get LaTeX-friendly output. Supports common functions like sin, cos, tan, ln, log, sqrt, and pi. Example: `sin(x)^2 + cos(x)^2` becomes `\sin^2(x)+\cos^2(x)`.

**Derivative Rules**
One-click templates for essential differentiation rules:
- Power rule: d/dx x^n = n·x^(n-1)
- sin, cos, e^x, and ln derivatives

**Useful Calculus Resources**
Quick access to external derivative calculators that open in a new browser tab.

**Privacy-first design**
- No ads
- No tracking or analytics
- No data collection
- No external scripts or remote code
- Only the `storage` permission (for local formula notes)

Install Math Formula Helper and keep your math workflow fast, organized, and distraction-free.

---

## File Structure

```
math formula helper/
├── manifest.json      # Extension manifest (Manifest V3)
├── popup.html         # Popup interface
├── popup.css          # Styles
├── popup.js           # Logic and storage
├── icons/
│   ├── icon16.png
│   ├── icon48.png
│   ├── icon128.png
│   └── README.txt
├── privacy-policy/
│   ├── index.html       # Hosted at /privacy-policy
│   └── styles.css
└── README.md
```

---

## Privacy

Math Formula Helper stores formula notes exclusively in `chrome.storage.local` on your device. The extension does not communicate with any external servers, collect usage data, or load third-party scripts.

**Privacy Policy URL (Chrome Web Store):** `https://www.calculadora-derivadas.org/privacy-policy`

Deploy the `privacy-policy/` folder to your web server so that `index.html` is served at `/privacy-policy`.

---
>>>>>>> 0480bdc (privacy policy added)

## License

MIT License
