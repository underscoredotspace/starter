const express = require('express')
const app = express()

app.use((req, res, next) => {
  console.log(`${Date()}: ${req.method} request for ${req.url}`)
  next()
})

app.use(express.static('app/client/view'))
app.use('/build', express.static('app/client/build'))
app.use('/lib', express.static('node_modules/angular'))

app.use('/test', (req, res) => {
  res.json({ok:true})
})

app.use((req, res) => {
  res.sendStatus(404)
})

const listener = app.listen(3000, function () {
  console.info(`Your app is listening on http://localhost:3000`)
}).on('error', (err) => {
  throw(err)
})