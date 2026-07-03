const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true
    },
    password: String,

    role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserRole"
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Admin", adminSchema);