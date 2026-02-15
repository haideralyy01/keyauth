const { Router } = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { JWT_SECRET } = require("../configurations/config");
const { UserModel } = require("../database/db"); // Use one consistent model
const { userMiddleware } = require("../middleware/user")

const userRouter = Router();

// Signup Route
userRouter.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Hash password before saving
        const hashedPassword = await bcrypt.hash(password, 10);

        await UserModel.create({
            name,
            email,
            password: hashedPassword
        });

        res.status(200).json({
            msg: "User signed up successfully"
        });
    } catch (error) {
        res.status(500).json({
            msg: "Error during signup",
            error: error.message
        });
    }
});

// Login Route
userRouter.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await UserModel.findOne({ email });

        if (!user) {
            return res.status(401).json({ msg: "User does not exist" });
        }

        // Compare hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ msg: "Invalid credentials" });
        }

        // Generate JWT
        const token = jwt.sign({ id: user._id.toString() }, JWT_SECRET, { expiresIn: "1h" });

        res.json({
            token,
            msg: "You have signed in"
        });
    } catch (error) {
        res.status(500).json({
            msg: "Error during login",
            error: error.message
        });
    }
});

userRouter.get("/me", userMiddleware, async(req, res) => {
    const userId = req.userId
    console.log("userId:", userId);
    try{
        const user = await UserModel.findById(userId).select("-password");
        if (!user) {
            return res.status(404).json({ msg: "USer not found"});
        }
        res.json({
            msg: "User found successfully",
            user: {
                id: user._id.toString(),
                name: user.name,
                email: user.email
            }
        })
    } catch (error) {
        res.status(500).json({
            msg: "Error fetching user details",
            error: error.message
        });
    }
})

module.exports = { userRouter };