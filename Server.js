var express = require('express')
var app = express()
const path = require('path')

app.use(express.json());
var cors = require('cors');
app.use(cors());

app.use(express.static(__dirname + '/hshomepage/build'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/hshomepage/build'));
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'hshomepage/build/index.html'));
})

app.listen(3001, '0.0.0.0', () => {
    console.log('Server is running : port 3001')
})