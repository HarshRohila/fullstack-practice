const express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use((req, res, next) => {
     res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
     next();
})

app.get('/', (_req, res) => {
     const response = { message: 'Hello World!' };
     res.send(response);
});

app.post('/user', (req, res) => {
     console.log(req.body);
     const response = { message: 'Got it!' };
     res.send(response);
});

app.listen(4200);