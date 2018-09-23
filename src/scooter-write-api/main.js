'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Services
const MessageBus = require('./message-bus');
const DockingStationService = require('./services/docking-station-service');
const ScooterService = require('./services/scooter-service');

const messageBus = new MessageBus();

const dockingStationService = new DockingStationService(messageBus);
const scooterService = new ScooterService(messageBus);

app.get('/health', (req, res) => {
    res.status(200).send({
        service: 'scooter-write-api',
        status: "healthy",
        now: Date.now()
    });
});

// Add docking station
app.post('/dockingstation', (req, res) => {
    const { lat, long, description } = req.body;
    try {
        dockingStationService.add({ lat, long, description });
        res.status(200).send();
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});

app.post('/scooter', (req, res) => {
    const { serialNumber } = req.body;
    try {
        scooterService.add({ serialNumber });
        res.status(200).send();
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});

app.listen(3000);