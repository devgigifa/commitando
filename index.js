const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const palindromo = require('./warmup')

app.use(bodyParser.json())

app.post('/e-palindromo', function (req, res) {
    const resposta = palindromo(req.body.palavra)
    if (resposta === true) {
        res.send('é palíndromo')
    }
    res.send('não é palíndromo')
})

app.listen(5500)
