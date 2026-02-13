const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require("../configurations/config");

function userMiddleware(req, res, next) {
    try {
        const token = req.headers.token;

        if(!token) {
            return res.status(401).json({
                message: "Token missing"
            });
            
        }
        const decodedData = jwt.verify(token, JWT_SECRET);

        if (decodedData.username) {
            req.username = decodedData.username;
            next();
        } else {
            res.status(401).json({
                message: "Unauthorized"
            });
        }
    }catch {
        res.status(401).json({
            message: "Invalid or expired token"
        });
    }
}

module.exports = {
    userMiddleware: userMiddleware,
}