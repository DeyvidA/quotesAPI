const express = require('express');
const app = express();
const server = require('http').Server(app)

const bodyParser = require('body-parser');
const db = require('./db')
const router = require('./network/routes')

db('mongodb+srv://admin:IqQTsD7mh8EmyDEm@cluster0.k9ztu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


router(app);

app.use('/app', express.static('public'));

server.listen(8080, function () {
    console.log('La aplicación está escuchando en http://localhost:8080');
    
});