# 💰 Gold Price Calculator

A modern, responsive gold price calculator built with **HTML**, **CSS**, and **vanilla JavaScript**.  
Calculates the final price of gold including **wage**, **seller profit**, and **VAT** — with live comma formatting and full RTL support.

---

## ✨ Features

- 🧮 Accurate gold price calculation
- 💵 Live comma formatting on price input (`24,000,000`)
- 📊 Detailed breakdown (gold price, wage, profit, VAT, total)
- 🎛️ Adjustable profit & VAT rates via dropdown
- 🌗 Elegant navy & gold theme
- 📱 Fully responsive (mobile, tablet, desktop)
- 🖥️ Fits the entire viewport on laptops — no scrolling
- 📱 Mobile-first layout — input + result in one screen
- 🇮🇷 Full RTL support with Vazirmatn font
- ⚡ Fast reset button with instant result clearing

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

| Field | Default | Range |
|-------|---------|-------|
| Wage (%) | empty | user input |
| Profit (%) | **7** | 0 – 10 (step 0.1) |
| VAT (%) | **9** | 0 – 10 (step 0.1) |

Both dropdowns are populated dynamically with values `0, 1, 1.1, 1.2, ..., 9.9, 10`.

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
├── index.html      # Markup
├── style.css       # Styles (responsive, navy & gold theme)
├── script.js       # Calculation logic + dynamic dropdowns
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
- [x] Dynamic dropdowns for profit & VAT
- [x] Mobile-first one-screen layout
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