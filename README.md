
# 💰 Gold Price Calculator

A modern, responsive gold price calculator built with **HTML5**, **CSS3**, and **Vanilla JavaScript**. It calculates the final price of gold based on weight, karat, making wage, seller profit, and VAT.

## ✨ Features

### 🧮 Gold Price Calculation
- Accurate gold price calculation based on weight and price per gram.
- Support for multiple gold purities: 14K, 18K, 20K, 21K, 22K, and 24K.
- Automatic conversion from the base 18K gold price to the selected karat.
- Detailed breakdown of gold value, making wage, seller profit, VAT, and final price.

### ⚡ Interactive Features
- Live calculation as input values change.
- Manual calculation using the Calculate button.
- Thousands separators for price inputs.
- Support for Persian, Arabic, and English numerals.
- Editable making wage, seller profit, and VAT percentages.
- Making-wage dropdown with quick selections from 1% to 30%.
- Default seller profit: `7%`.
- Default VAT: `10%`.
- Reset button to clear inputs and restore default values.

### 🎨 User Interface
- Full right-to-left (RTL) layout for Persian users.
- Elegant navy and gold color scheme.
- Responsive design for desktop, tablet, and mobile.
- Vazirmatn font integration through Google Fonts.
- Clean layout with readable calculation results.

### 📱 Progressive Web App (PWA)
- Web app manifest for application metadata.
- Service worker integration for caching assets.
- Cache-first asset delivery with network fallback.
- Application icons for supported installation environments.

> **Note:** PWA installation and offline functionality depend on valid asset paths, successful service worker registration, and browser support.

---

## 🧾 Calculation Formula

```text
Selected Karat Price = 18K Base Price × (Selected Karat / 18)

Gold Value = Selected Karat Price × Weight

Making Wage = Gold Value × (Wage Percentage / 100)

Seller Profit = (Gold Value + Making Wage)
                × (Profit Percentage / 100)

VAT = (Making Wage + Seller Profit)
      × (VAT Percentage / 100)

Final Price = Gold Value + Making Wage
              + Seller Profit + VAT
```

**Important:** VAT is calculated on the making wage and seller profit, not on the base gold value. Actual tax rules and applicable rates may differ.

---

## 🎛️ Default Values

| Field | Default Value | Editable |
|---|---|---|
| Base gold price (18K) | Empty | Yes |
| Gold weight | Empty | Yes |
| Gold karat | 18K | Yes |
| Making wage | Empty | Yes |
| Seller profit | 7% | Yes |
| VAT | 10% | Yes |

An empty making-wage field is treated as zero by the current parsing logic. The profit and VAT fields are initialized to `7%` and `10%`, respectively.

---

## 🔄 How to Use

1. Enter the current price per gram of 18-karat gold.
2. Select the desired gold karat.
3. Enter the gold weight in grams.
4. Enter the making-wage percentage or choose a value from the dropdown.
5. Adjust the seller profit and VAT percentages if needed.
6. View the updated result or click **Calculate**.
7. Click **Reset** to clear the inputs and start again.

---

## 🚀 Getting Started

### Prerequisites

- A modern web browser.
- Git (optional).
- Visual Studio Code (optional).

No Node.js installation, package manager, or build process is required for the basic application.

### 1. Clone the Repository

```bash
git clone https://github.com/Mohammad-arhami/Gold-Calculator-js-.git
```

### 2. Navigate to the Project Directory

```bash
cd Gold-Calculator-js-
```

### 3. Run the Application

Open `index.html` directly in your browser.

Alternatively, use the Live Server extension in Visual Studio Code for local development.

### 🌐 Live Demo

[Open Gold Price Calculator](https://mohammad-arhami.github.io/Gold-Calculator-js-/)

> The live demo requires GitHub Pages to be enabled for the repository.

---

## 📁 Project Structure

```text
Gold-Calculator-js-/
├── index.html          # Application structure
├── style.css           # Styling and responsive layout
├── script.js           # Calculation logic and interactions
├── manifest.json       # PWA metadata
├── service-worker.js   # Asset caching
├── Images/             # Images and application assets
├── README.md           # Project documentation
└── LICENSE             # License file, if included
```

The exact project structure may change as the application evolves.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Semantic markup and RTL structure |
| CSS3 | Responsive layout and visual styling |
| JavaScript (ES6+) | Calculation logic and DOM interactions |
| Vazirmatn | Persian typography |
| Web App Manifest | PWA metadata |
| Service Worker API | Static asset caching |

The project uses **Vanilla JavaScript** without a frontend framework or external JavaScript dependencies.

---

## 🎨 Color Palette

| Role | Color | Hex |
|---|---|---|
| Deep background | Navy | `#0a1d27` |
| Card background | Navy light | `#132F3E` |
| Input background | Dark navy | `#0B1F2A` |
| Primary accent | Gold | `#d4bc37` |
| Hover accent | Light gold | `#e7be4b` |
| Main text | White | `#F5F5F5` |
| Muted text | Gray-blue | `#A9B7BE` |

---

## 📱 Responsive Design

| Device | Layout |
|---|---|
| Desktop | Two-column input and result panels |
| Tablet | Adapted two-column layout |
| Mobile | Compact layout for smaller screens |
| Small mobile | Reduced spacing and typography |

---

## 🗺️ Roadmap

- [x] Build the calculator with Vanilla JavaScript.
- [x] Implement gold price calculation.
- [x] Support multiple gold karats.
- [x] Add making wage, seller profit, and VAT.
- [x] Implement live calculation.
- [x] Add editable percentage inputs.
- [x] Add a making-wage dropdown.
- [x] Support Persian and Arabic numerals.
- [x] Create a responsive navy-and-gold interface.
- [x] Add PWA manifest and service worker integration.
- [ ] Improve input validation and error messages.
- [ ] Add calculation history.
- [ ] Add a copy-result button.
- [ ] Generate printable reports or PDF invoices.
- [ ] Develop a React version.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome.

- [Open an Issue](https://github.com/Mohammad-arhami/Gold-Calculator-js-/issues)
- [View the Repository](https://github.com/Mohammad-arhami/Gold-Calculator-js-)

Please describe proposed changes clearly and provide reproduction steps when reporting bugs.

---

## 📄 License

See the `LICENSE` file in the repository if one is included.

---

## 👤 Author

**Mohammad Arhami**

- GitHub: [@Mohammad-arhami](https://github.com/Mohammad-arhami)
- LinkedIn: [Mohammad Arhami](https://www.linkedin.com/in/mohammad-arhami/)

---

⭐ If you find this project useful, consider giving the repository a star!
