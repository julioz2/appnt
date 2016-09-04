var http = require('http');
var mongoose = require('mongoose');
var config = require('./config');

var PushNotifications = new require('node-pushnotifications');
var push = new PushNotifications();
// 38F22C577AC05E21

//var deviceIds = '33F2FA5F68513DB1';
// 38F22C577AC05E21
// 38F22C577AC05E21
var deviceIds = '38F22C577AC05E21';


// Initialize database connection - throws if database connection can't be 
// established
mongoose.connect(config.mongoUrl);

// Create Express web app
var app = require('./webapp');

// Create an HTTP server and listen on the configured port
var server = http.createServer(app);
server.listen(config.port, function() {
    console.log('Express server listening on *:' + config.port);
});

var data = {
  title: 'New push notification',
  message: 'Powered by AppFeel',
  otherfields: 'optionally add more data'
};

/*
push.send(deviceIds, data, function (result) {
	console.log('*********************');
	console.log(result);
});
*/


