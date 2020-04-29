const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
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
        required: false,
        default: Date.now
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
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

module.exports = mongoose.model('Exercise', ExerciseSchema);

