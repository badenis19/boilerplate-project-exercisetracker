const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserExerciseSchema = new Schema({
    description: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    userId: {
        type: String,
        required: true
    },
    from: {
        type: Date,
        required: false,
        default: Date.now
    },
    to: {
        type: Date,
        required: false,
        default: Date.now
    },
    limit: {
        type: Number,
        required: false
    }
});

module.exports = mongoose.model('Exercises', UserExerciseSchema);

