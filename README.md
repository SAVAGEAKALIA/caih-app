# Community Action for Integrated Health (CAIH) Web Application

Welcome to the official web application repository for **Community Action for Integrated Health (CAIH)**. Formerly known as the *Irene International Relief Foundation*, CAIH is a registered NGO delivering integrated community health services—including HIV prevention, NCD screening, maternal care, and health systems strengthening—across Southeast Nigeria.

This application is built with a modern, high-performance tech stack using React and Vite, featuring a premium custom design system, interactive forms, and responsive components.

---

## 🚀 Key Features

*   **Premium Design & Aesthetics:** Clean typography, glassmorphism accents, subtle micro-animations, and a cohesive color palette tailored around professional deep burgundy and gold colors.
*   **Fully Responsive Layout:** Optimized from the ground up for desktop, tablet, and mobile devices (with specialized flex stacking to prevent overlapping stats).
*   **Interactive Contact Form:** Built-in serverless form delivery using **Web3Forms** (submitting directly to the administrator's email) featuring modern, inline AJAX success/error feedback banners.
*   **Programs & Research Showcases:** Detailed components displaying core health program areas, acceptances for international research abstracts, and localized key impact statistics.
*   **Partner & Donation Modal:** Seamless interactive popups to facilitate sponsorships, partnerships, and direct contributions.

---

## 🛠️ Tech Stack

*   **Core Framework:** [React v18](https://react.dev/)
*   **Build Tool & Dev Server:** [Vite v5](https://vite.dev/)
*   **Styling:** Vanilla CSS (theme-driven via CSS variables in [index.css](file:///wsl$/Ubuntu-22.04/home/saviour/antigravityprojects/caih-app/src/index.css))
*   **Icons & Emojis:** Native Unicode/Emoji integration for instant loading without external icon package overhead
*   **Email Forwarding Service:** [Web3Forms](https://web3forms.com/)

---

## 💻 Local Setup & Installation

To run this project locally, ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### 1. Clone & Navigate
Clone this repository to your local machine (or open the project directory in your terminal/WSL):
```bash
cd ~/antigravityprojects/caih-app
```

### 2. Clean Installation (Crucial for WSL)
If you previously installed dependencies from a Windows terminal inside a WSL directory, delete the existing node modules to fix execution permission errors:
```bash
# Delete existing node_modules
rm -rf node_modules

# Install dependencies inside the WSL terminal
npm install
```

### 3. Start the Development Server
Launch Vite's hot-reloading development server:
```bash
npm run dev
```
Once started, open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📦 Production Build

To build the project for production (compiles and minifies assets for optimal loading speeds):
```bash
npm run build
```

The output files will be generated in the `dist/` directory, ready to be deployed to static hosting providers (Netlify, Vercel, GitHub Pages, etc.).

To preview your production build locally:
```bash
npm run preview
```

---

## 📁 Project Structure

```text
caih-app/
├── public/                 # Static public assets
├── src/
│   ├── assets/             # Logos and global data assets
│   ├── components/         # Reusable React components (Navbar, Hero, About, Contact, etc.)
│   ├── App.jsx             # Main Application router and entry layout
│   ├── index.css           # Global design system & responsive styling stylesheet
│   └── main.jsx            # React client mount root
├── index.html              # HTML shell template
├── package.json            # Scripts and dependency manifests
└── vite.config.js          # Vite build configurations
```

---

## 🔒 Contact & Inquiries
For further inquiries or partnerships, reach out directly via the contact form or send an email to **chidimairene@gmail.com**.
