const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const Exercise = require("../models/Exercise").schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    exercises: [{
        type: Schema.Types.ObjectId,
        ref: 'Exercise'
    }]
})

module.exports = mongoose.model('User', UserSchema);

// 5ea9b2c20fb277e3403f4f0d