const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema(
{
    roleName: {
        type: String,
        required: true,
        unique: true
    },

    permissions: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "permission"
        }
    ]
},
{
    timestamps: true,
    strict: true,
    collection: "UserRoles"
});

module.exports = mongoose.model("UserRole", roleSchema);