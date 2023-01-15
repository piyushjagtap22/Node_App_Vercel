// index.js
const express = require('express')


const connectDB = require('./config/db');
const path = require('path');



const app = express()
// app.listen(PORT, () => {
//   console.log(`API listening on PORT ${PORT} `)
// })

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));



app.get('/', (req, res) => {
  res.send('Hey this is my API running 🥳')
})

app.get('/about', (req, res) => {
  res.send('This is my about route..... ')
})


const server = app.listen(0, () => console.log(`Server started on port :`,server.address().port));
// Export the Express API
mgithubodule.exports = app