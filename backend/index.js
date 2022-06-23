const express = require('express')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 5000

const app = express()

const start = async () => {
    try {
        await mongoose.connect('mongodb+srv://Anton_Kucher:D4xChdNU@cluster0.ydqdqqs.mongodb.net/auth_roles?retryWrites=true&w=majority')
        app.listen(PORT, () => console.log(`server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start ()