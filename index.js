const express = require('express');
const http = require('http');
const path = require('path')

let app = express();

app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

http.createServer(app).listen(app.get('port'), () => {
    console.log("Start Listening TO requests")
})