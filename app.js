const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', './templates');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Wooza Flow Template Manager',
        message: 'V0.0.1'
    });
});

app.listen(3000, () => console.log('App Listening on port 3000'));