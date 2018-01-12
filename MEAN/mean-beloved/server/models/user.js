'use strict';
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const session = require('express-session');

const UserSchema = new mongoose.Schema({
	first: {
		type: String,
		required: [true, 'First name is required!'],
		minlength: [2, 'First name should be atleast 2 characters!'],
		maxlength: [20, 'First name must be no more than 20 characters']
	},
	last: {
		type: String,
		required: [true, 'Last name is required!'],
		minlength: [2, 'Last name should be atleast 2 characters!'],
		maxlength: [20, 'Last name must be no more than 20 characters']
	},
	email: {
		type: String,
		required: [true, 'Please enter an email!'],
		unique: true
	},
	password: {
		type: String,
		required: [true, 'Please enter a password!'],
		minlength: [8, 'Password must be atleast 8 characters!']
	}
});

// Hashes password before placing in database
UserSchema.pre('save', function (next) {
	let self = this;
	bcrypt.genSalt(10, (err, salt) => {
		if(err) return next(err);
		bcrypt.hash(self.password, salt, (err, hash) => {
			if(err) {
				return next(err);
			}
			self.password = hash;
			next();
		});
	});
});

// User method to compare entered password
UserSchema.methods.compare = function(userPassword, cb) {
	let self = this;
	bcrypt.compare(userPassword, self.password, function(err, match) {
		if (err) return cb(err);
		cb(null, match);
	});
};

const User = mongoose.model('User', UserSchema);
