const express = require('express');
const UserService = require('./UserService');

const app = express();

app.use(express.json());

const userService = new UserService();

//Route for user registration with additional attributes

app.post('/api/register', async (req, res) => {
	const { email, password, name, role } = req.body;

	try {
		const newUser = await userService.register(email, password, nam			e, role);
		res.status(201).json({message: 'User registered successfully', 			newUser});
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
});

// Route for user login

app.post('/api/login', async (req, res)=> {
	const {email, password} = req.body;
	try {
		const user = await userService.login(email,password);
		res.status(200).json({ message: 'Login successful', user });
	}	catch (error) {
		res.status(401).json({ error:error.message });
	}
});
app.listen(3000, () => console.log('Server running on port 3000'));


