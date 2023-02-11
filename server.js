const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const colors = require('colors')

const { notFound, errorHandler } = require('./middleware/errorMiddleware')




// Creating an express app
const app = express()

const connectDB = require('./config/db')

// Initializing dotenv || Load env vars
dotenv.config({ path: './config/config.env' })

// Connect to database
connectDB()


// Import Route files
// const roles = require('./routes/roleRoutes')


// using JSON parser
app.use(express.json({limit: "70mb"}))


// Enable cors
app.use(cors())


// Mount routers
// app.use('/api/v1/roles', roles)

app.get('/', (req, res) => {
    res.json({
        message: "CHAT-BOT MONGO-DB"
    })
})


// Use error Middleware
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

// app listener
app.listen(PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))