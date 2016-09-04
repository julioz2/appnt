var cfg = {};


//  ACe95f4c075a4d329902761504fbb9c4be', '814e911950e7ebf1974f2db4fdf61a25');

// HTTP Port to run our web application
cfg.port = process.env.PORT || 3000;

// A random string that will help generate secure one-time passwords and
// HTTP sessions
cfg.secret = process.env.APP_SECRET || 'keyboard cat';

// Your Twilio account SID and auth token, both found at:
// https://www.twilio.com/user/account
// 
// A good practice is to store these string values as system environment
// variables, and load them from there as we are doing below. Alternately,
// you could hard code these values here as strings.
//cfg.accountSid = process.env.TWILIO_ACCOUNT_SID;
cfg.accountSid = process.env.TWILIO_ACCOUNT_SID || 'ACe95f4c075a4d329902761504fbb9c4be';
cfg.authToken = process.env.TWILIO_AUTH_TOKEN || '814e911950e7ebf1974f2db4fdf61a25';

// A Twilio number you control - choose one from:
// https://www.twilio.com/user/account/phone-numbers/incoming
// Specify in E.164 format, e.g. "+16519998877"
cfg.twilioNumber = process.env.TWILIO_NUMBER || '+393926162397';

// Your Authy production key - this can be found on the dashboard for your 
// Authy application
cfg.authyKey = process.env.AUTHY_API_KEY || 'l86d2tRuPoQa3y9QMrdd6j0U5Pdf1MDX'; 

// MongoDB connection string - MONGO_URL is for local dev,
// MONGOLAB_URI is for the MongoLab add-on for Heroku deployment
cfg.mongoUrl = process.env.MONGOLAB_URI || process.env.MONGO_URL || 'mongodb://localhost:27017/appoint';

// Export configuration object
module.exports = cfg;