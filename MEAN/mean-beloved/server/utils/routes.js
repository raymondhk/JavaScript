const users = require('./../controllers/users.js');
const {resolve} = require('path');

module.exports = function (app) {
	// Users routes
	// app.get('/api/users', users.index);

	app.post('/api/users', users.register);
	app.post('/api/login', users.login);

	app.all("*", (req, res, next) => {
		res.sendfile(resolve("./public/dist/index.html"));
	})

};
