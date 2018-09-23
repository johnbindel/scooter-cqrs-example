'use strict';

class MessageBus {
    publish(topic, message) {
        console.log(`Message <${topic}>: ${message}`);
    }
}

module.exports = MessageBus;