const mongoose = require('mongoose');
const User = mongoose.model('User');
const session = require('express-session');

module.exports = {
	// index: function (req, res) {
	// 	console.log('Hit home route');
	// 	let err = false
	// 	// User.find({},(err, objs) =>{
	// 	// 	if(err) console.log(`There was some sort of error \n ${err}`);
	// 	// 	else {
	// 	// 		console.log('querried DB');
	// 	// 		values.users = objs
	// 	// 		console.log(values.users);
	// 	// 		return res.render('index', values)
	// 	// 	}
	// 	// })
	// 	if (err) return res.status(400).json({errors:'failure'})
	// 	return res.json({success:'success'})
	// },

	register: (req, res) => {
		console.log(req.body);
		let user = new User(req.body);
		user.save()
			.then(() => {
				session._id = user._id;
				res.json(user);
			})
			.catch(err => {
				console.log(err);
				res.status(500).json(err);
			});
	},

	login: (req, res) => {
		console.log(req.body)
		User.findOne({ email: req.body.email })
			.then( user => {
				console.log(user);
				if(!user) { res.status(500).json('User does not exist!') }
				else {
					user.compare(req.body.password, (err, match) => {
						if(err) res.status(500).json('Error');
						else if (!match) res.status(500).json('Password is incorrect try again!')
						else {
							session._id = user._id;
							res.json(user);
						};
					});
				}
				
			})
			.catch(err => {
				console.log(err);
				res.status(500).json('DB error!');
			});
	}
}
