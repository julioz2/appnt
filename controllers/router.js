var home = require('./home');
var users = require('./users');
var apps = require('./apps');

// Map routes to controller functions
module.exports = function(app) {
    // Render home page
    app.get('/', home.show);

    // Routes for account creation
    app.get('/users/new', users.showCreate);
    app.post('/users', users.create);

    app.route('/users/:id/verify')
        .get(users.showVerify)
        .post(users.verify);
    
    app.post('/users/:id/resend', users.resend);
    app.get('/users/:id', users.showUser); // dashboard

    app.get('/users/:id/update', users.updateUser);
    app.post('/users/:id/updateName', users.updateName);
    
    app.post('/app', apps.newApp);
    app.get('/app/:id', apps.showApp);
    app.get('/users/:id/appList', apps.showAppList);
};