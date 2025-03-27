if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

// start express server and require view dependencies
const express = require('express')
const app = express()

const indexRouter = require('./routes/index')
const calculateRouter = require('./routes/calculate')

// tell the app to use these dependencies
app.use(express.json());
app.set('views', './views')
app.set('view engine', 'ejs')
app.use(express.static('public'))

// set up routes
app.use('/', indexRouter)
app.use('/calculate', calculateRouter)

// listen on port 5000
const PORT = process.env.PORT || 5000
app.listen(PORT, console.log("Server is listening on port " + PORT))