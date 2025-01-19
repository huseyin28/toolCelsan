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


app.post('/elevatorLabel', (req, res) => {
    console.log(req.params);

    res.render('print/elevatorLabelPrint', {
        layout: false,
        data: '<h1>ESRA</div>'
    });
})


app.get('/kalanBul', (req, res) => {
    res.render('kalanBul', {
        title: 'Kalan Bul',
        scripts: `<script src="/scripts/kalanBul.js?v=${Math.random()}"></script>`

    });
})

app.get('/elevatorLabel', (req, res) => {
    res.render('elevatorLabel', {
        title: "Asansör Etiketi",
        scripts: [
            `<script src="/scripts/elevatorLabel.js"></script>`
        ]
    });
})

app.get('*', (req, res) => {
    res.status(404).render("404", { layout: false })
})

app.listen(80)