const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	name: {
        type: String,
        required: [true, "Please enter your name!"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Please enter your email!"],
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please enter your password!"],
        minlength: 6
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    isDoctor: {
        type: Boolean,
        default: false
    },
    notification: {
        type: Array,
        default: []
    },
    seennotification: {
        type: Array,
        default: []
    },
}, {
	timestamps: true,
	versionKey: false
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;