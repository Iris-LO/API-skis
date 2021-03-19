require('dotenv').config();

const express = require('express');

const app = express();

const port = process.env.PORT || 3001;

const router = require('./router');

app.use(express.json());
app.use('/v1', router);

app.launch = () => { // launch est une méthode
    app.listen(port, () => console.log(`Running on http://localhost:${port}`));
};

module.exports = app;