Cooking!


studybuddy/ <br>
│<br>
├── backend/                     # (Later) Spring Boot project lives here<br>
│   └── (empty for now)<br>
│
├── frontend/                    # Vite + React app<br>
│   ├── index.html
│   ├── vite.config.js<br>
│   ├── package.json<br>
│   ├── jsconfig.json            # Path aliases for JSX<br>
│   └── src/<br>
│       ├── main.jsx<br>
│       ├── App.jsx<br>
│       │<br>
│       ├── assets/<br>
│       │   └── logo.png<br>
│       │<br>
│       ├── pages/               # Pages (Feed, Add Resource, Profile, etc.)<br>
│       │   ├── Feed.jsx<br>
│       │   ├── AddResource.jsx<br>
│       │   ├── Leaderboard.jsx<br>
│       │   ├── Reviews.jsx<br>
│       │   └── Settings.jsx<br>
│       │<br>
│       ├── components/          # Reusable UI components<br>
│       │   ├── Navbar.jsx<br>
│       │   ├── ResourceCard.jsx<br>
│       │   ├── ReviewForm.jsx<br>
│       │   ├── RatingStars.jsx<br>
│       │   └── Loader.jsx<br>
│       │
│       ├── context/             # Global state management<br>
│       │   └── ResourceContext.jsx<br>
│       │<br>
│       ├── hooks/               # Custom hooks<br>
│       │   ├── useLocalStorage.js<br>
│       │   └── useApi.js        # (For future Spring Boot integration)<br>
│       │<br>
│       ├── services/            # API clients (for Spring Boot backend)<br>
│       │   ├── apiClient.js<br>
│       │   └── resourceService.js<br>
│       │<br>
│       ├── styles/              # Global CSS / Tailwind / utilities<br>
│       │   └── globals.css <br>
│       │<br>
│       └── utils/               # Helpers<br>
│           ├── uuid.js<br>
│           ├── sorting.js<br>
│           └── validation.js <br>
│<br>
└── README.md<br>


# Commands


cd frontend<br>
npm install<br>
npm install react-router-dom<br>
npm install tailwindcss @tailwindcss/vite<br>
