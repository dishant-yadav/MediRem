// initialised express
const express = require('express');
const morgan = require('morgan');
const app = express();
// dotenv
require("dotenv").config();

// public
app.use('/static', express.static('public'));

// ejs view engine to dynamically load pages
app.set("view engine", "ejs");

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}/`);
})

// app.get('/')
// middlewares
app.use(express.json());
app.use('*', morgan("dev"));

app.get('/', (request, resolve)=> {
    resolve.render('index')
})
app.get('/add', (request, resolve)=> {
    resolve.render('addmeds')
})

// 404
app.use('*', (request, resolve) => {
    resolve.status(404).render('404');
})