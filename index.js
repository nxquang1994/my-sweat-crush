const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');


app = express();

// Body parser middleware
app.engine('handlebars', exphbs({defaultLayouts: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/wish', (req, res) => {
    let scripts = [{ script: '/js/normal-wish.js' }];
    res.render('normal_wish', { scripts: scripts });
});

app.get('/happy', (req, res) => {
    let scripts = [{ script: '/js/happy-wish.js' }];
    res.render('happy_wish', { scripts: scripts });
});

app.get('/love', (req, res) => {
    let scripts = [{ script: '/js/love-wish.js' }];
    res.render('love_wish', { scripts: scripts });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Started at port ${PORT}`);
})