const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    let siteNane = "Adidas"
    let searchText = "Search Now"
    res.sendFile('templates/index.html', { root: __dirname });
})

app.get('/blog:slug', (req, res) => {
    let BlogTitle = "Adidas"
    let BlogContent = "I will be a very nice"
    res.sendFile('templates/index.html', { root: __d=rname });
})

app.listen(port, () => {
    console.log(`Example app listening on port {port}`);
})