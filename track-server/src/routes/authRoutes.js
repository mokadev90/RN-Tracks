const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = mongoose.model('User');

const router = express.Router();

router.post('/signup', async (req, res) => {
	const { email, password } = req.body;
	console.log(
		'🚀 ~ file: authRoutes.js:10 ~ router.post ~ email, password',
		email,
		password
	);
	try {
		const user = new User({ email, password });
		console.log('🚀 ~ file: authRoutes.js:17 ~ router.post ~ user', user);
		await user.save();

		const token = jwt.sign({ userId: user._id }, 'MY_SECRET_KEY');
		console.log('🚀 ~ file: authRoutes.js:21 ~ router.post ~ token', token);
		res.send({ token });
	} catch (error) {
		return res.status(422).send(error.message);
	}
});

router.post('/signin', async (req, res) => {
	const { email, password } = req.body;

	if (!email || !password) {
		return res.status(422).send({ error: 'Must provide email and password' });
	}

	const user = await User.findOne({ email });
	if (!user) {
		return res.status(404).send({ error: 'Email not found' });
	}

	try {
		await user.comparePassword(password);
		const token = jwt.sign({ userId: user._id }, 'MY_SECRET_KEY');
		res.send({ token });
	} catch (error) {
		return res.status(422).send({ error: 'Invalid password or email' });
	}
});

module.exports = router;
