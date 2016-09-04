var mongoose = require('mongoose');
//var bcrypt = require('bcrypt');
var config = require('../config');

// Create authenticated Authy and Twilio API clients
var authy = require('authy')(config.authyKey);
var twilioClient = require('twilio')(config.accountSid, config.authToken);

// Used to generate password hash
var SALT_WORK_FACTOR = 10;

// Define user model schema
var AppSchema = new mongoose.Schema({
    title: {
        type: String,
        required: false
    },
    when: {
        type: String,
        required: false
    },
    where: {
        type: String,
        required: true
    },
    client: {
        type: String,
        required: true
    },
    ownerId: {
        type: String,
        required: true
    }
});

// Export user model
module.exports = mongoose.model('App', AppSchema);