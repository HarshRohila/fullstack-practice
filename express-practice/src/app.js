const express = require('express');
var bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.json())

app.get('/', (_req, res) => {
     res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
     const response = { message: 'Hello World!' };
     res.send(response);
});

app.post('/user', (req, res) => {
     res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
     console.log(req.body);
     const response = { message: 'Got it!' };
     res.send(response);
});

app.listen(4200);