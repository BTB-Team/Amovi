# 🌍 Amovi Travel — Front-end Project Documentation

This document serves as the **Master Roadmap** and the primary software-engineering reference for developing the bilingual website of the **Amovi Travel** tourism agency.

---

## 🎯 Phase 1 — Requirement Analysis

- **Project type:** A dynamic catalog and travel-request website (Catalog & Booking Request).
- **Number of languages:** Bilingual (English / Dari), without requiring complex external packages.
- **Development structure:** Team-based, with 6 final members.
- **Golden system rule:** Submitting a form does not mean that a booking has been confirmed (`Submitting a Request ≠ Booking`). The system does not include an online payment gateway.
- **Destinations covered (10 provinces):** Kabul, Bamyan, Balkh, Ghazni, Ghor (Minaret of Jam), Helmand (Qala-e-Bost), Herat, Kandahar, Nuristan, and Panjshir.
- **Independent services (5 services):** Visa services, accommodation, transportation, professional guides, and travel security and support.

---

## 🗺️ Phase 2 — Information Architecture

### 1. Main Navigation Structure (Navbar Options)

- **Home** (`/`)
- **About Us** (`/about`)
- **Services** (`/services` — a comprehensive services page with a zigzag layout)
- **Destinations** (`/destinations` — an archive of 10 provinces)
- **Tours** (`/tours` — an archive of travel packages)
- **Blog** (`/blog`)
- **Contact Us** → Displayed as a distinctive CTA button at the end of the navigation.

### 2. Footer Structure

- **Terms & Conditions**
- **Privacy Policy**

### 3. User Flow & Page Logic

- **Scroll Logic:** Hero buttons on the tours and services pages smoothly scroll the user to the request form at the bottom of the same page.
- **Payment Flow:** The payment methods page (`/payment-methods`) has no direct link in the header or footer. It is accessible only at the final stage after the request process, if required.

---

## 🗄️ Phase 3 — Data Architecture

Data management is fully separated and organized according to a lightweight front-end structure:

1. **Static translations:** Stored in the `src/locales/` directory in two files: `en.json` and `fa.json`.
2. **Dynamic data:** Stored in the `db.json` file at the project root for use with `json-server`. All tour objects and other dynamic content are managed through this file.

---

## 🏗️ Phase 4 — Software Architecture

- **Layered architecture:** The code is separated into three layers: the presentation layer (UI), the logic and language layer (Zustand state), and the service layer (Axios API).
- **Integrated component strategy:** Avoid creating overly small components for every individual button, image, or text element. Components should be grouped meaningfully to prevent unnecessary project complexity.
- **Approved project dependencies:** `react-router-dom`, `axios`, `zustand`, `lucide-react`, and `Tailwind CSS`.

---

## 📂 Phase 5 — Project Architecture

The front-end team must create the folder structure in VS Code exactly according to this Page-Driven pattern:

```text
src/
├── assets/          # Images, logos, and fonts
├── components/      # Shared components, such as MasterRequestForm
├── locales/         # en.json and fa.json files
├── store/           # Zustand store for managing the site's active language
├── services/        # Files for communicating with json-server (Axios setup)
├── routes/          # Site route management
└── pages/           # Page folders based on the page-ownership strategy
    ├── home/        # Includes Home.jsx and this page's dedicated /components folder
    ├── about/
    ├── services/
    ├── layout/      # Includes Header.jsx and Footer.jsx
    ├── contact/
    ├── tours/
    ├── destinations/
    ├── policy/
    ├── blog/
    └── payment/
```

---

## 👥 Phase 6 — Team Planning & WBS

The work is divided among 6 team members according to **Page-Based Ownership**. Each developer is responsible for their assigned page from start to finish.

- **Member 1 (Manager/Lead):** Set up the project foundation, configure the Zustand language store, and create the layout and routing structure.
- **Member 2:** Develop the shared and dynamic `MasterRequestForm` component.
- **Member 3:** Own the home page (`home`) and contact page (`contact`) folders.
- **Member 4:** Own the destinations folder (`destinations`) for rendering the 10 provinces.
- **Member 5:** Own the tours folder (`tours`), connected to the province-filtering system.
- **Member 6:** Own the comprehensive services folder (`services`) with its zigzag styling, as well as the blog folder (`blog`).

> 📌 **Sharing rule:** If a developer creates a component that can be reused by other team members, they must place it in the shared `src/components/` directory and inform the team before using it in other pages.

---

## 🌿 Phase 8 — Version Control Strategy

- **Main branches:** The `main` branch contains the final bug-free code, while the `develop` branch is used for development integration.
- **Feature branch naming:** Create branches from `develop` using the format `feature/feature-name` or `bugfix/issue-name`.
- **Pull Request (PR) rule:** Every PR must be reviewed and approved by at least **2 other team members** before it is merged into `develop`.

---

## 🔒 Phase 10 — Security Planning

- **Input validation:** Verify valid email formats using Regex, filter phone numbers, and sanitize data to prevent malicious or invalid input.
- **No sensitive-data storage:** Personal information and traveler form data must never be stored in the browser's LocalStorage.

---

## 🧪 Phase 11 — Testing Strategy

- **Unit testing:** Test the Zustand language store with **Vitest** to ensure that text switching and page direction changes (RTL/LTR) work correctly.
- **Manual checklist:** Verify that forms cannot be submitted with empty fields, the submit button is disabled while a request is being submitted, and the complete bilingual user flow works correctly.
- **Bug reporting:** All front-end errors must be recorded in **GitHub Issues** and assigned to the owner of the relevant page.
