const User = require('./User');
const UserRepository = require('./UserRepositoy');

class UserService {
	constructor() {
		this.userRepositoy = new UserRepository();
	}

//register a new user with additional fields

	async register(email, password, name, role){
		const existingUser = await this.userRepository.findByEmail(emai			l);
		if (existingUser){
			throw new Error('User already exists');
		}
		const newUser = await User.register(email, password, name, role			);
		await this.userRepository.save(newUser);
		return newUser;
	}

	//login a user by email and password

	async login(email, password) {
		const userRecord = await this.userRepository.findByEmail(email)				;
		if (!userRecord) {
			throw new Error('User not found');
		}
		const user = new User(
			userRecord.email,
			userRecord.password,
			userRecord.name,
			userRecord.role,
			userRecord.createdAt
		);

		const isAuthenticated = await user.authenticate(password);

		if (!isAuthenticated) {
			throw new Error('Invalid password');
		}
		return user;
	}
}

module.exports = UserService;
