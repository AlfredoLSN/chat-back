const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, requires: true, unique: true },
    password: { type: String, required: true },
    language: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
