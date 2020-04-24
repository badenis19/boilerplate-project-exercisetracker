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
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    from: {
        type: Date,
        required: true
    },
    to: {
        type: Date,
        required: true
    },
    limit: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Exercises', UserExerciseSchema);

