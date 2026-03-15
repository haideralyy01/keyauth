import { createContext, useState, useContext } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const login = async (email, password) => {
        try {
            const res = await axios.post("http://localhost:3000/user/login", {
                email,
                password
            });
            if (res.data && res.data.token) {
                setUser(res.data.user);
                localStorage.setItem("token", res.data.token);
            } else {
                alert("Login failed: No token received");
            }
        } catch (err) {
            console.error("Login failed:", err);
            alert("invalid credentials or server error");
        }
    }

    const signup = async (email, password, name) => {
        try {
            const res = await axios.post("http://localhost:3000/user/signup",{
                name,
                email,
                password
            });
            if (res.data && res.data.token) {
                setUser(res.data.user);
                localStorage.setItem("token", res.data.token);
            } else {
                alert("Signup failed: No token received");
            }
        } catch (err) {
            console.error("Signup failed",  err);
            alert("Could not create account");
        }
    }

    const logout = () => {
        setUser(null);
        localStorage.removeItem("token");
    }

    return (
        <AuthContext.Provider value={{ user, setUser, login, signup, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    return useContext(AuthContext);
}