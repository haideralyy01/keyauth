# KeyAuth Backend

This is the backend for the KeyAuth authentication system, built with Node.js, Express, and MongoDB.

## Features
- User Signup and Login (JWT-based)
- Password hashing with bcrypt
- MongoDB for user storage
- CORS configured for frontend

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- MongoDB instance (local or cloud)

### Installation
```bash
cd backend
npm install
```

### Environment Variables
Create a `.env` file in the backend directory with:
```
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=3000
```

### Running the Backend
```bash
npm run dev
```
The server will start on [http://localhost:3000](http://localhost:3000).

## Project Structure
- `index.js` — Main server file
- `routes/user.js` — User routes (signup, login)
- `database/db.js` — Mongoose models and DB connection
- `configurations/config.js` — App configuration
- `middleware/user.js` — User-related middleware

## API Endpoints
- `POST /user/signup` — Signup (returns JWT and user info)
- `POST /user/login` — Login (returns JWT and user info)

## Notes
- Ensure CORS is set to allow requests from the frontend (localhost:5173).
- Passwords are hashed before storing in the database.
- JWT is used for authentication.
