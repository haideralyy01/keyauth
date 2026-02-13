const mongoose = require("mongoose");

(async() => {
    try {
        mongoose.connect("");
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Database connection error:", error.message);
        process.exit(1);
    }
})();

const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    email: {type: String, unique: true},
    password: String,
    name: String
});

const UserModel = mongoose.model('users', UserSchema);

module.exports = {
    UserModel
}