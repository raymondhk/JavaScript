const express = require('express');
const session = require('express-session');
const app = express();
const PORT = 8000;

app.use(session({secret: 'thisissecret'}));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    if(req.session.count == null) {
        req.session.count = 0;
    }
    else {
        req.session.count++;
    }
    res.render('index', {'count': req.session.count});
})

app.get('/add', (req, res) => {
    req.session.count++;
    res.redirect('/');
})

app.get('/reset', (req, res) => {
    req.session.count = 0;
    res.redirect('/');
})

app.listen(PORT, function() { 
    console.log("listening on port " + PORT);
})