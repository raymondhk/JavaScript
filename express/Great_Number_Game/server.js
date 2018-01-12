const express = require('express');
const body = require('body-parser');
const session = require('express-session');
const port = 8000;
const app = express();

app.use(body.urlencoded({extended:true}));
app.use(session({secret:'thisismysecretcode'}));
app.use(express.static(__dirname + '/static'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    if(!req.session.num) {
        req.session.num = Math.floor(Math.random()*(101-1)+1);
    }
    console.log(req.session.num)
    console.log(req.session.guess)
    // console.log(Math.floor(Math.random()*(101-1)+1)); // random number between 1 - 100
    res.render('index', {'num': req.session.num, 'guess': req.session.guess});
});

app.post('/guess', (req, res) => {
    req.session.guess = req.body.guess;
    res.redirect('/');
})

app.get('/reset', (req, res) => {
    req.session.destroy();
    res.redirect('/');
})


app.listen(port, function() {
    console.log(`listening on port ${port}`);
})