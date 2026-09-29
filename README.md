# 💰 Gold Price Calculator

A modern, responsive gold price calculator built with **HTML**, **CSS**, and **vanilla JavaScript**.  
Calculates the final price of gold including **wage**, **seller profit**, and **VAT** — with live comma formatting and full RTL support.

---

## ✨ Features

- 🧮 Accurate gold price calculation
- 💵 Live comma formatting on price input (`24,000,000`)
- 📊 Detailed breakdown (gold price, wage, profit, VAT, total)
- 🌗 Elegant navy & gold theme
- 📱 Fully responsive (mobile, tablet, desktop)
- 🖥️ Fits the entire viewport on laptops — no scrolling
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

## 🎨 Color Palette

| Role | Color | Hex |
|------|-------|-----|
| Background (deep) | Navy | `#0B1F2A` |
| Card background | Navy light | `#132F3E` |
| Gold (primary) | Gold | `#D4AF37` |
| Gold (hover) | Light gold | `#F1D27A` |
| Text (main) | White | `#F5F5F5` |
| Text (muted) | Gray | `#A9B7BE` |

---

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/USERNAME/gold-calculator.git
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
├── index.html      # Markup + Styles + Logic (all-in-one)
├── README.md       # Documentation
└── LICENSE         # MIT License
```

---

## 🛠️ Tech Stack

- **HTML5** — semantic markup with RTL
- **CSS3** — `clamp()`, CSS variables, grid, media queries
- **JavaScript (ES6+)** — vanilla, no dependencies
- **Vazirmatn** — Persian font via Google Fonts

---

## 📱 Responsive Breakpoints

| Device | Behavior |
|--------|----------|
| 🖥️ Desktop (>900px) | Two-column layout, fits viewport |
| 📱 Tablet (640–900px) | Two-column, scaled down |
| 📱 Mobile (<640px) | Single-column, scrollable |
| 💻 Short laptops (<720px height) | Compact spacing |

---

## 🗺️ Roadmap

- [x] Vanilla JS version
- [ ] React version
- [ ] Save calculation history
- [ ] Copy result button
- [ ] Print / PDF invoice

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!  
Feel free to check the [issues page](https://github.com/USERNAME/gold-calculator/issues).

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Your Name**  
- GitHub: [@USERNAME](https://github.com/USERNAME)
- Email: your.email@example.com

---

⭐ If you like this project, give it a star!