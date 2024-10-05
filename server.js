//ENV
require('dotenv').config()


// Express, path
const express = require('express');
const app = express();
const path = require('path')

// Mongodb connection
const Dbconnect = require('./config/DBconnection.js')


//Cors
const cors = require('cors')
const corsOprion = require('./config/corsOption')


Dbconnect()


app.use(cors());
app.use(cors(corsOprion));


app.use(express.json())


// для проверки работы localhost
app.use('/', require('./routes/root.js'));


// высвечивает ошибку если не такой страницы
app.all('/*', (req, res) => {
    res.status(404);
    if(req.accepts(html)){
        res.sendFile(path.join(__dirname, 'views', '404.html'))
    }else if(req.accepts(json)){
        req.json({'message': "404 страница не найдена"})
    }else{
        res.type('txt').send("404 страница не найдена")
    }
})





const PORT = 8000
app.listen(PORT, () => {
console.log(`Сервер работает на порте ${PORT}`)
})