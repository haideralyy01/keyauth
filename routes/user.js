const { Router } = require('express');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } =  require("../configurations/config")
const userMiddleware = require("../middleware/user");
const { userModel } = require("../database/db");
const userRouter = Router();

userRouter.post('/signup',  async (req, res) => {
    const { name, email, password } = req.body;
    
})

