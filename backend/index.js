const express = require('express');
const cors = require('cors');
const { userRouter } = require("./routes/user");
require('dotenv').config();
const app = express();

app.use(cors({
  origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"], // allow Authorization header
  credentials: true
}));

app.use(express.json());

app.use("/user", userRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});