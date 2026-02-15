const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require("../configurations/config");

function userMiddleware(req, res, next) {
    try {
        // Expect token in Authorization header
        const authHeader = req.headers['authorization'];
        if (!authHeader) {
            return res.status(401).json({ message: "Token missing" });
        }

        // Extract token from "Bearer <token>"
        const token = authHeader.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: "Token is invalid" });
        }

        // Verify token
        const decodedData = jwt.verify(token, JWT_SECRET);

        // Attach user info to request
        if (decodedData.id) {
            req.userId = decodedData.id;
            next();
        } else {
            res.status(401).json({ message: "Unauthorized" });
        }
    } catch (error) {
        res.status(401).json({ message: "Invalid or expired token", error: error.message });
    }
}

module.exports = { userMiddleware };