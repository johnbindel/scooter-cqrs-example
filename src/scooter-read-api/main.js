'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.get('/health', (req, res) => {
    res.status(200).send({
        service: 'scooter-read-api',
        status: "healthy",
        now: Date.now()
    });
});

app.listen(3000);