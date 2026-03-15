import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./components/Login";
import SigninPage from "./components/Signup";
import UserProfilePage from "./components/AppBar";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SigninPage />} />
      <Route path="/dashboard" element={<UserProfilePage />} />
      <Route path="*" element={<Navigate to="/login" replace />} /> 
    </Routes>
  );
}

export default App;
