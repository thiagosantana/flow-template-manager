const express = require('express');
const app = express();

app.use(express.static());
app.get('/', (req, res) => res.send('Wooza template generator'));

app.listen(3000, () => console.log('App Listening on port 3000'));