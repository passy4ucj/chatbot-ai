import mongoose from 'mongoose'


const responseSchema = new mongoose.Schema({
    response: {
        type: String,
        required: [true, 'Please enter response']
    },
    status: {
        type: Boolean,
        default: false
    },
    message: {
        type: mongoose.Schema.ObjectId,
        ref: 'Message',
        required: true
    },
    responseBy: {
        type: String,
        required: [true, 'Please enter response BY']
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
})


const Response = mongoose.model('Response', responseSchema)

export default Response