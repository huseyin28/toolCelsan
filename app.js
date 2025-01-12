const express = require('express')
var expressLayouts = require('express-ejs-layouts')
const app = express()
const port = 80

app.set('view engine', 'ejs')
app.use(expressLayouts)
app.set('layout', 'layout/default');
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('kapasiteHesapla', {
        title: "Kapasite Hesapla",
        scripts: [
            `<script src="/scripts/kapasiteHesapla.js"></script>`
        ]
    });
})

app.get('/makaraBul', (req, res) => {
    res.render('makaraBul', {
        title: "Makara Bul",
        scripts: [
            `<script src="/scripts/makaraBul.js"></script>`
        ]
    });
})

app.get('*', (req, res) => {
    res.status(404).render("404", { layout: false })
})

app.listen(80)