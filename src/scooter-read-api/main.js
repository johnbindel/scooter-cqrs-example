'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.get('/health', (req, res) => {
    res.send(200).send({
        service: 'scooter-read-api',
        healthy: true,
        now: Date.now()
    });
});

app.listen(3000);