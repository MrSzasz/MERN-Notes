import mongoose from 'mongoose'

let userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    notes: {
        type: Array,
        default: [],
    },
}, {
    timestamps: true
})

export default mongoose.model('User', userSchema)