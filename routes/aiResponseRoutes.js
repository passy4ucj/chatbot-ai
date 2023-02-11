const express = require('express')
const { createAIResponse, getAllAIResponses, getAIResponse } = require('../controllers/aIReasponseController')
const router = express.Router()

router.route('/')
    .post(createAIResponse)
    .get(getAllAIResponses)

router.route('/:messageCode')
    .get(getAIResponse)


module.exports = router