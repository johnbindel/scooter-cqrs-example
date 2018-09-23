'use strict';

class ScooterService {
    constructor(messageBus) {
        this.messageBus = messageBus;
    }

    add({serialNumber}) {
        // TODO: Add to mongo
        this.messageBus.publish('scooters', {
            event: 'ScooterAdded',
            scooterId: scooterId,
            serialNumber: serialNumber
        });
    }
}

module.exports = ScooterService;