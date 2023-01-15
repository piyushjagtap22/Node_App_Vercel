// index.js
const express = require('express')

const app = express()
const PORT = 4000
const server = app.listen(0, () => console.log(`Server started on port :`,server.address().port));

// app.listen(PORT, () => {
//   console.log(`API listening on PORT ${PORT} `)
// })

app.get('/', (req, res) => {
  res.send('Hey this is my API running 🥳')
})

app.get('/about', (req, res) => {
  res.send('This is my about route..... ')
})



// Export the Express API
module.exports = app