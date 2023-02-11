import mongoose from 'mongoose'


const AiResponseSchema = new mongoose.Schema({
    response: {
        type: String,
        required: [true, 'Please enter response']
    },
    messageCode: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
})


const AIResponse = mongoose.model('AIResponse', AiResponseSchema)

module.exports = AIResponse