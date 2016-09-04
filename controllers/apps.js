var App = require('../models/App');

exports.newApp = function(request, response) {
    var params = request.body;

    // Create a new user based on form parameters
    var app = new App({
        ownerId: params.ownerId,
    	title: params.title,
        where: params.where,
        when: params.when,
        client: params.client,
        id: params._id
    });

    app.save(function(err, doc) {
        response.redirect('/app/'+doc._id);
    });
};


exports.newapp = function(request, response, next) {
    // Load app model
    response.render('apps/new');
};

// Show details about the appointment
exports.showApp = function(request, response, next) {
    // Load app model
    App.findById(request.params.id, function(err, app) {

        if (err || !app) {
            // 404
            return next();
        }

        response.render('apps/show', {
            title: app.title,
            where: app.where,
            when: app.when,
            client: app.client,
            id: request.params.id
        });
    });
};

// showAppList
exports.showAppList = function(request, response) {

    var owner = request.params.id;
    // Load user model
    App.find({ 'ownerId': owner }, function(err, app) {

        // tutti gli appuntamenti con id -> request.
        console.log(app.length);

        response.render('apps/list', { apps : app });
    
    });


};






