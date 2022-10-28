const expres = require('express')
const app  = expres();

app.get('/hello', (req, res) => res.send('hello world'))

app.get('/subtract/:a/:b', (req, res) =>
  res.send((parseInt(req.params.a) - parseInt(req.params.b)).toString())
)

app.get('/add/:a/:b', (req, res) =>
  res.send((parseInt(req.params.a) + parseInt(req.params.b)).toString())
)

app.get('/multiply/:a/:b', (req, res) =>
  res.send((parseInt(req.params.a) * parseInt(req.params.b)).toString())
)

app.get('/power/:a/:b', (req, res) =>
  res.send(Math.pow(parseInt(req.params.a), parseInt(req.params.b)).toString())
)

app.listen(3000)