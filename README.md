# Amovi Travel — Front-End Application

Amovi Travel is a bilingual travel website built with React and Vite. The application presents travel-related content and provides a structured inquiry form for users who want to request information about a package or service.

> **Current status:** This repository contains the initial front-end implementation. Several pages and supporting features are scaffolded or partially implemented and should not be considered production-ready.

## Features

The current application includes:

- React-based single-page application architecture
- English and Dari language support
- Automatic LTR/RTL direction switching
- Client-side routing with React Router
- Shared travel request form
- Separate public layout and admin route
- Tailwind CSS styling
- Zustand-based language state management

The request form collects the following information:

- Full name
- Email address
- WhatsApp/phone number
- Preferred travel date
- Number of travelers
- Selected package or service
- Additional requirements
- Privacy-policy consent

Submitting the form currently displays a confirmation message and logs the form data. Backend persistence and request processing are not yet implemented.

## Technology Stack

### Runtime Dependencies

- React
- React DOM
- React Router DOM
- Zustand
- Axios
- Lucide React

### Development Tools

- Vite
- Tailwind CSS
- PostCSS
- ESLint

## Project Structure

```text
.
├── public/
├── src/
│   ├── components/
│   │   └── MasterRequestForm.jsx
│   ├── locales/
│   │   ├── en.json
│   │   └── fa.json
│   ├── pages/
│   │   ├── about/
│   │   ├── admin/
│   │   ├── blog/
│   │   ├── contact/
│   │   ├── destinations/
│   │   ├── home/
│   │   ├── layout/
│   │   ├── payment/
│   │   ├── policy/
│   │   ├── services/
│   │   └── tours/
│   ├── services/
│   ├── store/
│   │   └── useLangStore.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## Application Routes

The application currently defines the following routes:

| Route | Purpose |
|---|---|
| `/` | Home page |
| `/about` | About page |
| `/services` | Services page |
| `/destinations` | Destinations page |
| `/tours` | Tours page |
| `/blog` | Blog page |
| `/contact` | Contact page |
| `/policy` | Policy page |
| `/payment-methods` | Payment methods page |
| `/admin` | Independent admin page without the public layout |

The public routes are rendered inside the main layout. The admin route is rendered separately without the public header and footer.

## Internationalization

Language state is managed by `src/store/useLangStore.js`.

- The default language is English (`en`).
- Dari is represented by the `fa` locale.
- English uses left-to-right (`ltr`) layout direction.
- Dari uses right-to-left (`rtl`) layout direction.
- Translation files are stored in `src/locales/en.json` and `src/locales/fa.json`.

The translation dictionaries are currently limited and should be expanded as additional interface content is implemented.

## Local Development

### Requirements

- Node.js
- npm

### Installation

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

### Run linting

```bash
npm run lint
```

## Data and Backend Status

The repository does not currently contain a configured backend, `db.json` file, or implemented API endpoint. Although Axios is included as a dependency and the `src/services/` directory is reserved for service logic, request data is not currently persisted to a server.

The request form currently uses a client-side submission handler. A future backend integration should replace the console logging behavior with a validated API request and an appropriate loading, success, and error state.

## Current Limitations

The following items are not fully implemented or cannot be verified from the current repository structure:

- Backend request storage and API integration
- Authentication and authorization for the admin route
- Complete translation coverage
- Automated tests
- Production payment processing
- Production-grade form validation and error handling
- Complete content for all planned pages
- Persistent storage for submitted user information

These limitations should be addressed before deploying the application as a production booking or inquiry platform.

## Development Guidelines

- Keep shared, reusable components in `src/components/`.
- Keep page-specific components inside their corresponding page directory.
- Keep translation text in the locale files instead of hard-coding repeated interface text.
- Do not store personal or travel-request information in browser `localStorage`.
- Validate and sanitize all user input before sending it to a backend service.
- Do not describe a submitted inquiry as a confirmed booking unless a future backend workflow explicitly confirms it.

## Project Scope

The project is currently focused on the front-end presentation layer and the initial travel inquiry experience. Destination catalogs, tour packages, service content, payment workflows, administrative functionality, and backend processing should be documented and implemented only when they are supported by the repository code.
