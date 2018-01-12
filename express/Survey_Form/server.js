const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const PORT = 8000;
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(session({secret: 'thisissecret'}));
app.use(express.static(__dirname + "/static"));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
})

app.post('/post', (req, res) => {
    req.session.survey = req.body;
    res.redirect('/result');
})

app.get('/result', (req, res) => {
    if(!req.session.survey){
        res.redirect('/');
    }
    res.render('result', {'survey': req.session.survey})
})

app.listen(PORT, function() {
    console.log(`listening on port ${PORT}`);
})