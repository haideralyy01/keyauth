# KeyAuth Frontend

This is the frontend for the KeyAuth authentication system, built with React and Vite.

## Features
- User Signup and Login
- Protected Dashboard/User Info Page
- React Context for Auth State
- Tailwind CSS for UI
- Axios for API requests

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Installation
```bash
cd frontend
npm install
```

### Running the Frontend
```bash
npm run dev
```
The app will be available at [http://localhost:5173](http://localhost:5173).

### Environment Variables
If you use a custom backend URL, create a `.env` file and set:
```
VITE_API_URL=http://localhost:3000
```

## Project Structure
- `src/components/` — React components (Login, Signup, AppBar, etc.)
- `src/context/AuthContext.jsx` — Authentication context
- `src/index.css` — Tailwind CSS entry
- `vite.config.js` — Vite configuration

## API Endpoints Used
- `POST /user/signup` — Signup
- `POST /user/login` — Login

## Notes
- Make sure the backend is running and CORS is configured to allow requests from the frontend.
- On successful signup/login, users are redirected to the dashboard.
