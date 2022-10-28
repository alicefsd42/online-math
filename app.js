const expres = require('express')
const app  = expres();

app.get('/hello', (req, res) => res.send('hello world'))

app.listen(3000)