const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;

const cetagory = require('./data/cetagoris.json')
const news = require('./data/news.json')

app.use(cors())

app.get('/', (req, res) => {
    res.send('dragon news is cumming')
});

app.get('/cetagoris', (req, res) => {
    res.send(cetagory)
});

app.get('/news', (req, res) => {
    res.send(news)
});

app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    const selectedNews = news.find(n => n._id === id)
    res.send(selectedNews)
});

app.get('/cetagoris/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (id === 0) {
        res.send(news)
    }
    else {
        const categoryNews = news.filter(n => parseInt(n.category_id) === id)
        res.send(categoryNews)
    }
});



app.listen(port, () => {
    console.log(`dragon news is cumming in port : ${port}`)
})