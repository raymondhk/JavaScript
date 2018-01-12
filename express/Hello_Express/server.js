const express = require("express");
const app = express();
const PORT = 8000;
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send("<h1>Hello Express</h1>");
})

app.get('/users', (req, res) => {
    let users_array = [
        {name: "Michael", email: "michael@codingdojo.com"}, 
        {name: "Jay", email: "jay@codingdojo.com"}, 
        {name: "Brendan", email: "brendan@codingdojo.com"}, 
        {name: "Andrew", email: "andrew@codingdojo.com"}
    ];
    res.render('users', {users: users_array});
})

app.listen(PORT, function() {
    console.log(`listening on port ${PORT}`);
})