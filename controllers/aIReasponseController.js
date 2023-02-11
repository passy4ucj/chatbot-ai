const AIResponse = require('../models/AIResponse')
const asyncHandler = require('express-async-handler')


// @desc  Create AI Message
// @route POST /api/v1/ai-response
// @access Public
const createAIResponse = asyncHandler(async (req, res, next) => {

    const { 
        response,
        messageCode,
     } = req.body

     try {

        // Create AI response
        const aiResponse = await AIResponse.create({
            response,
            messageCode,
        })


        res.status(200).json({
            success: true,
            email: 'AI Message Created',
            data: aiResponse
        })
    } catch (error) {
        console.log(error)

        res.status(500)
        throw new Error('AI Response error!')
        //return next(new ErrorResponse('Email could not be sent', 500))
    }
    
})

// @desc  Get AI Response by Message code
// @route GET /api/v1/ai-response/
// @access Private
const getAIResponse = asyncHandler(async (req, res, next) => {

    const {
        messageCode,
    } = req.params

    const aiResponse = await AIResponse.find({ messageCode })

    if(messages) {
        res.status(200).json({
            success: true,
            data: aiResponse
        })
    } else {
        res.status(404)
      throw new Error('AI Response not found')
    }
})

// @desc  Get all AI Responses
// @route GET /api/v1/ai-response
// @access Private
const getAllAIResponses = asyncHandler(async (req, res, next) => {

    const aiResponses = await AIResponse.find({})

    if(aiResponses) {
        res.status(200).json({
            success: true,
            data : aiResponses
        })
    } else {
        res.status(404)
      throw new Error('Messages not found')
    }
})




module.exports = {
    createAIResponse,
    getAIResponse,
    getAllAIResponses
}