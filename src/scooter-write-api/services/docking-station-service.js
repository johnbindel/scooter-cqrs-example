'use strict';

class DockingStationService {
    constuctor(messageBus) {
        this.messageBus = messageBus;
    }

    add({lat, long, description}) {
        this.messageBus.publish('docking-station', {
            event: 'DockingStationAdded',
            lat: lat,
            long: long,
            description: description
        });
    }
}

module.exports = DockingStationService;