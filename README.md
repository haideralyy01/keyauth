# KeyAuth Project

KeyAuth is a full-stack authentication system featuring a React + Vite frontend and a Node.js + Express + MongoDB backend. It provides secure user signup, login, and JWT-based authentication.

## Project Structure

```
KeyAuth/
├── backend/   # Express.js backend API
├── frontend/  # React + Vite frontend
└── README.md  # Project overview (this file)
```

## Features
- User registration and login
- JWT authentication
- Protected dashboard/user info page
- Password hashing (bcrypt)
- MongoDB for user storage
- React Context for global auth state
- Tailwind CSS for UI

## Getting Started

### 1. Clone the Repository
```bash
git clone <repo-url>
cd KeyAuth
```

### 2. Setup Backend
See [backend/README.md](backend/README.md) for detailed instructions.

### 3. Setup Frontend
See [frontend/README.md](frontend/README.md) for detailed instructions.

## Development
- Start backend: `cd backend && npm run dev`
- Start frontend: `cd frontend && npm run dev`

## API Endpoints
- `POST /user/signup` — Signup
- `POST /user/login` — Login

## Environment Variables
- Backend: `.env` for MongoDB URI, JWT secret, and port
- Frontend: `.env` for API URL (if not default)

## License
MIT
