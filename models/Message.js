import mongoose from 'mongoose'


const messageSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please enter the title']
    },
    body: {
        type: String,
        required: [true, 'Please enter the description']
    },
    status: {
        type: Boolean,
        default: false
    },
    createdBy: {
        type: String,
        required: [true, 'Please enter the createdBy']
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
})


const Message = mongoose.model('Message', messageSchema)

export default Message