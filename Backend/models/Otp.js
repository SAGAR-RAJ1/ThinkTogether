//!not used currently used the google auth instead 
const mongoose = require("mongoose");

const otpSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },

    otp: {
        type: String,
        required: true,
    },

    expiresAt: {
        type: Date,
        required: true,
    },
}, {
    timestamps: true,
});

// Automatically delete the document after expiresAt
otpSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

module.exports = mongoose.model("Otp", otpSchema);