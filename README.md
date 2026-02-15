# KeyAuth

KeyAuth is a full-stack authentication project with a Node.js/Express backend and a simple frontend. It demonstrates user authentication, token management, and protected routes.

## Project Structure

```
KeyAuth/
├── backend/
│   ├── index.js           # Main backend server
│   ├── package.json       # Backend dependencies
│   ├── configurations/    # Config files
│   ├── database/          # Database logic
│   ├── middleware/        # Middleware functions
│   └── routes/            # API route handlers
└── frontend/
    ├── index.html         # Main frontend page
    └── script.js          # Frontend logic
```

## Features
- User registration and login
- Token-based authentication (JWT or custom tokens)
- Protected API routes
- Basic user management
- Simple frontend for interaction

## Setup Instructions

### Backend
1. Navigate to the backend folder:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the server:
   ```sh
   node index.js
   ```

### Frontend
Open the `frontend/index.html` file in your browser to access the UI.

## API Endpoints
- `POST /register` — Register a new user
- `POST /login` — Authenticate user and receive token
- `GET /profile` — Get user profile (protected)

## Configuration
- Edit `backend/configurations/config.js` for environment variables and settings.

## License
This project is for educational purposes.
