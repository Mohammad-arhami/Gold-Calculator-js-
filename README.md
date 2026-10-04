# 💰 Gold Price Calculator

A modern, responsive gold price calculator built with **HTML**, **CSS**, and **vanilla JavaScript**.  
Calculates the final price of gold including **wage**, **seller profit**, and **VAT** — with **live calculation**, comma formatting, and full RTL support.

---

## ✨ Features

### 🟢 Active Features
- 🧮 Accurate gold price calculation
- ⚡ **Live calculation** — results update as you type (no button needed on mobile)
- 💵 Live comma formatting on price input (`24,000,000`)
- 📊 Detailed breakdown (gold price, wage, profit, VAT, total)
- ✏️ **Editable profit & VAT rates** — type any value directly
- 🎛️ Smart defaults: profit `7%`, VAT `10%`
- 🌗 Elegant navy & gold theme
- 📱 Fully responsive (mobile, tablet, desktop)
- 🖥️ Fits the entire viewport on laptops — no scrolling
- 📱 Mobile-first layout — input + result in one screen
- 🇮🇷 Full RTL support with Vazirmatn font
- ⚡ Fast reset button with instant result clearing

### 🟡 Legacy Features (Kept in Code, Disabled)
- 🎛️ **Dropdown-based profit & VAT selectors** — replaced by editable inputs
  - The original code is preserved as **comments** in `index.html`, `style.css`, and `script.js`
  - To re-enable: uncomment the relevant blocks and swap inputs back to `<select>`

---

## 🧾 Calculation Formula

```
Gold Price     = Daily Rate × Weight
Wage           = Gold Price × Wage%
Profit         = (Gold Price + Wage) × Profit%
VAT            = (Profit + Wage) × Tax%
Final Price    = Gold Price + Wage + Profit + VAT
```

> **Note:** VAT is calculated only on **profit + wage**, not on the gold itself.

---

## 🎛️ Default Values

| Field | Default | Editable |
|-------|---------|----------|
| Gold Price (per gram) | empty | ✅ |
| Weight (grams) | empty | ✅ |
| Wage (%) | empty (treated as 0) | ✅ |
| Profit (%) | **7** | ✏️ yes |
| VAT (%) | **10** | ✏️ yes |

- If the user clears **wage** → treated as `0` in calculation.
- If the user clears **profit** or **VAT** → defaults (`7`, `10`) are used.

---

## 🔄 Calculation Modes

### Current (Active)
- **Live calculation** — result updates on every keystroke
- Works on **all devices** (mobile, tablet, desktop)
- On **mobile**, the "Calculate" button is hidden (auto calculation)
- On **desktop/tablet**, the "Calculate" button is visible and functional

### Legacy (Disabled)
- **Button-based calculation** — user clicks "Calculate" to see the result
- Code is preserved as comments in `script.js`
- To re-enable: comment out the `liveInputs.forEach(...)` block and uncomment the old event binding

---

## 🗂️ Legacy Code Reference

The following features were part of the previous version and are kept as comments:

### 1. Dropdown for Profit & VAT
- **HTML**: `<select id="profitPercent">` and `<select id="taxPercent">` (commented in `index.html`)
- **CSS**: `.field select { ... }` and `.field select option { ... }` (commented in `style.css`)
- **JS**: `fillPercentDropdown()` and `addOption()` functions (commented in `script.js`)
- **Why removed**: replaced by editable inputs for better UX (users can type any value)

### 2. Manual Calculate Button
- **JS**: `$('calcBtn').addEventListener('click', calculate);` (still active, but hidden on mobile)
- **Why hidden on mobile**: live calculation makes the button redundant on small screens

---

## 🎨 Color Palette

| Role | Color | Hex |
|------|-------|-----|
| Background (deep) | Navy | `#0a1d27` |
| Card background | Navy light | `#132F3E` |
| Gold (primary) | Gold | `#d4bc37` |
| Gold (hover) | Light gold | `#e7be4b` |
| Text (main) | White | `#F5F5F5` |
| Text (muted) | Gray | `#A9B7BE` |

---

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/Mohammad-arhami/gold-calculator.git
   ```

2. **Open the project**
   ```bash
   cd gold-calculator
   ```

3. **Run it**  
   Just open `index.html` in your browser. No build step needed.

---

## 📁 Project Structure

```
gold-calculator/
├── index.html      # Markup (with legacy <select> blocks commented)
├── style.css       # Styles (with legacy select styles commented)
├── script.js       # Live calculation logic (with legacy dropdown code commented)
├── README.md       # Documentation
└── LICENSE         # MIT License
```

---

## 🛠️ Tech Stack

- **HTML5** — semantic markup with RTL
- **CSS3** — `clamp()`, CSS variables, grid, flexbox, media queries
- **JavaScript (ES6+)** — vanilla, no dependencies
- **Vazirmatn** — Persian font via Google Fonts

---

## 📱 Responsive Breakpoints

| Device | Behavior |
|--------|----------|
| 🖥️ Desktop (>900px) | Two-column layout, fits viewport |
| 📱 Tablet (640–900px) | Two-column, scaled down |
| 📱 Mobile (<640px) | Single-column, one-screen layout (no scroll) |
| 📱 Small mobile (<380px) | Compact fonts and spacing |

---

## 🗺️ Roadmap

- [x] Vanilla JS version
- [x] Live calculation (no button needed on mobile)
- [x] Editable profit & VAT rates
- [x] Mobile-first one-screen layout
- [x] Dropdown version (kept as commented legacy code)
- [ ] React version
- [ ] Save calculation history
- [ ] Copy result button
- [ ] Print / PDF invoice

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!  
Feel free to check the [issues page](https://github.com/Mohammad-arhami/gold-calculator/issues).

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Mohammad Arhami**  
- GitHub: [@Mohammad-arhami](https://github.com/Mohammad-arhami)

---

⭐ If you like this project, give it a star!