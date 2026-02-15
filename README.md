# KeyAuth

KeyAuth is a simple authentication system project, featuring a backend (Node.js/Express) and a frontend. It demonstrates user authentication using API endpoints and basic middleware for user management.

## Project Structure

```
KeyAuth/
  backend/
    index.js           # Main backend server
    package.json       # Backend dependencies
    configurations/    # Config files
    database/          # Database logic
    middleware/        # Middleware functions
    routes/            # API route handlers
  frontend/
    index.html         # Main frontend page
    script.js          # Frontend logic
```

## Features
- User registration and login
- Token-based authentication (JWT or custom tokens)
- Protected routes for authenticated users
- Basic user management

## Getting Started

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
Open the `frontend/index.html` file in your browser.

## API Endpoints
- `POST /register` — Register a new user
- `POST /login` — Authenticate user and receive token
- `GET /profile` — Get user profile (protected)

## Configuration
- Edit backend/configurations/config.js for environment variables and settings.

## License
This project is for educational purposes.
