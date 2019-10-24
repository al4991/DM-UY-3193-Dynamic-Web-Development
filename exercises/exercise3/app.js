const express = require('express'); 
const app = express(); 

const port = 4000; 

const aboutRoute = require('./src/routes/about'); 
const indexRoute = require('./src/routes/index'); 

app.use('/', indexRoute);
app.use('/about', aboutRoute);
app.use(express.static('public'))

app.listen(port, () => {
    console.log('Example app listening on port 3000!');
});