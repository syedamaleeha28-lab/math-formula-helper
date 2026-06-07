# Math Formula Helper

A lightweight Chrome extension for students, teachers, engineers, and STEM professionals. Quickly copy mathematical symbols, save personal formula notes, convert plain-text formulas to LaTeX-friendly format, and access useful calculus resources.

**No ads. No tracking. No analytics. No data collection.**

---

## Features

- **Math Symbol Library** — One-click copy for π, ∞, √, ∫, ∂, Δ, θ, α, β, γ, λ, μ, σ, Σ
- **Formula Notes** — Save, edit, and delete personal formulas (stored locally)
- **Formula Converter** — Convert plain text like `sin(x)^2 + cos(x)^2` to `\sin^2(x)+\cos^2(x)`
- **Derivative Rules** — One-click templates for common differentiation formulas
- **Calculus Resources** — Quick links to derivative calculators (open in new tab)

---

## Installation (Load Unpacked)

### Prerequisites

- [Google Chrome](https://www.google.com/chrome/) (version 88 or later)

### Steps

1. **Download or clone** this folder to your computer.

2. **Open Chrome Extensions page**
   - Go to `chrome://extensions/`
   - Or: Menu (⋮) → Extensions → Manage Extensions

3. **Enable Developer mode**
   - Toggle **Developer mode** in the top-right corner

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
| Privacy policy | Not required — no data leaves the device |

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
└── README.md
```

---

## Privacy

Math Formula Helper stores formula notes exclusively in `chrome.storage.local` on your device. The extension does not communicate with any external servers, collect usage data, or load third-party scripts.

---

## License

This project is provided as-is for educational and personal use.
