# HNG Stage 1B - Testable Profile Card

A high-fidelity, accessible, and fully testable Profile Card built for the HNG i14 Frontend Wizards Stage 1B task. This project focuses on clean typography, responsive design, and precise attribute mapping for automated testing.

**[View Live Demo](https://hng-task-1b-odielijah.netlify.app/)**

## 📸 Project Preview
<img width="1680" height="1050" alt="Screenshot 2026-04-17 at 3 01 53 pm" src="https://github.com/user-attachments/assets/64be4db4-e08f-45a6-9edb-bb5e71f91eca" />


## ✨ Key Features

### Automated Testability
- Implements all required `data-testid` attributes (e.g., `test-profile-card`, `test-user-name`, `test-user-time`) to ensure seamless integration with the HNG grading bots.

### Accessibility & Semantics
- **Semantic HTML:** Utilizes `<article>`, `<figure>`, `<nav>`, and `<header>` to provide meaningful structure for screen readers.
- **Dynamic Updates:** The time display uses `aria-live="polite"` to announce updates to assistive technologies without interrupting the user.
- **Focus States:** Custom focus rings on social links to assist keyboard-only navigation.

### Design Excellence
- **Fluid Layout:** Adapts from a vertical stack on mobile to a sleek horizontal split-pane on larger viewports.
- **Minimalist Aesthetic:** A clean, border-heavy design inspired by modern brutalist and minimalist web trends.
- **Typography:** Uses a sophisticated mix of DM Sans for readability and DM Serif Display for character.

### Interactive Logic
- **Precision Time Tracking:** A custom Vanilla JS script that updates the current time in milliseconds every 100ms, ensuring the "Epoch" badge is always current.

---

## 🛠️ Tech Stack

- **HTML5** (Structure & Semantics)
- **CSS3** (Flexbox, CSS Grid, & Custom Variables)
- **Vanilla JavaScript** (Real-time DOM manipulation)

---

## 📂 Project Structure

```text
├── index.html   # Semantic structure & Test IDs
├── style.css    # Layout, typography & responsiveness
├── script.js    # Time update logic
└── README.md    # Documentation
```

## 🔧 Installation & Local Setup

1. **Clone the repo:**
   ```bash
   git clone https://github.com/odielijah/hng-task-1b.git
   ```
2. **Open the project:**
Simply double-click index.html or use the Live Server extension in VS Code.
