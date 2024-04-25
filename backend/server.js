const express = require('express')
const app = express()
const path = require('path')
const { logger } = require('./middleware/logger')
const PORT = process.env.PORT || 3500

// Logger
app.use(logger)

// Parse JSON
app.use(express.json())

// Resources
app.use('/', express.static(path.join(__dirname, '/public')))

// Routing
app.use('/', require('./routes/root'))

// 404
app.all('*', (req, res) => {
    res.status(404)
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'))
    } else if (req.accepts('json')) {
        res.json({ message: '404 Not Found' })
    } else {
        res.type('txt').send('404 Not Found')
    }
})

app.listen(PORT, ()=> console.log(`Server running on ${PORT}`))

/*

Logger

Parse JSON
Gives the server the ability to parse JSON

Resources
Points whre to find resources such as .css

Routing

404
Catches anything that Routing doesn't catch
In which case 404 page is shown

*/