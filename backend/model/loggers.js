const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const loggersSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String
    },
    age: {
        type: Number,
        required: true
    },
    contact: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    city: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

loggersSchema.pre('save', async function (next) {
    const logger = this;

    if (!logger.isModified('password')) return next();

    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(logger.password, salt);
        logger.password = hashedPassword;
        next();
    } catch (err) {
        console.error('Error in hashing password:', err);
        next(err);
    }
});

loggersSchema.methods.comparePassword = async function (candidatePassword) {
    try {
        const isMatch = await bcrypt.compare(candidatePassword, this.password);
        return isMatch;
    } catch (err) {
        console.error('Error in comparing password:', err);
        throw err;
    }
};

module.exports = mongoose.model('Loggers', loggersSchema);
