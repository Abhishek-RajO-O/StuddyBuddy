Cooking!
studybuddy/
│
├── backend/                     # (Later) Spring Boot project lives here
│   └── (empty for now)
│
├── frontend/                    # Vite + React app
│   ├── index.html
│   ├── vite.config.js
│   ├── package.json
│   ├── jsconfig.json            # Path aliases for JSX
│   └── src/
│       ├── main.jsx
│       ├── App.jsx
│       │
│       ├── assets/
│       │   └── logo.png
│       │
│       ├── pages/               # Pages (Feed, Add Resource, Profile, etc.)
│       │   ├── Feed.jsx
│       │   ├── AddResource.jsx
│       │   ├── Leaderboard.jsx
│       │   ├── Reviews.jsx
│       │   └── Settings.jsx
│       │
│       ├── components/          # Reusable UI components
│       │   ├── Navbar.jsx
│       │   ├── ResourceCard.jsx
│       │   ├── ReviewForm.jsx
│       │   ├── RatingStars.jsx
│       │   └── Loader.jsx
│       │
│       ├── context/             # Global state management
│       │   └── ResourceContext.jsx
│       │
│       ├── hooks/               # Custom hooks
│       │   ├── useLocalStorage.js
│       │   └── useApi.js        # (For future Spring Boot integration)
│       │
│       ├── services/            # API clients (for Spring Boot backend)
│       │   ├── apiClient.js
│       │   └── resourceService.js
│       │
│       ├── styles/              # Global CSS / Tailwind / utilities
│       │   └── globals.css
│       │
│       └── utils/               # Helpers
│           ├── uuid.js
│           ├── sorting.js
│           └── validation.js
│
└── README.md
# Commands
cd frontend
npm install
npm install react-router-dom
npm install tailwindcss @tailwindcss/vite
