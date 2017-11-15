const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => res.send('Wooza template generator'));

app.listen(3000, () => console.log('App Listening on port 3000'));