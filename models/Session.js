import mongoose from 'mongoose'


const AiResponseSchema = new mongoose.Schema({
    message: [
        {
            messages: { type: String, required: true },
            createdAt: { type: Date, default: Date.now },
            status: { type: Boolean, default: false },
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    },
})


const AIResponse = mongoose.model('AIResponse', AiResponseSchema)

export default AIResponse