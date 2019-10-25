const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const  createTb  = require('./data/config');

createTb();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

app.listen('3001', (error) => {
    if (error) return console.log(`Error: ${error}`);

    console.log(`App is ready for use. Port: 3001; PID: ${process.pid}`);
});