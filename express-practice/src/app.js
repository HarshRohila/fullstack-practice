const express = require('express');
const app = express();

app.get('/', (_req, res) => {
     res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
     const response = { message: 'Hello World!' };
     res.send(response);
});

app.listen(4200);