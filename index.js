const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;

const cetagory = require('./data/cetagoris.json')

app.use(cors())

app.get('/', (req, res) => {
    res.send('dragon news is cumming')
});

app.get('/cetagoris', (req, res) => {
    res.send(cetagory)
});



app.listen(port, () => {
    console.log(`dragon news is cumming in port : ${port}`)
})