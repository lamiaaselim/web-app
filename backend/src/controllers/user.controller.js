const UserService = require("../services/user.service");

// Register new user
exports.register = async (req, res, next) => {
  const { username,email, password } = req.body;

  try {
    const user = await UserService.register(username, email, password);
    res.status(201).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      isAdmin: user.role === 'admin',
      token: UserService.generateToken(user), // Call the token generation function from the service
    });
  } catch (error) {
    next(error);
  }
};

// Login
exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const result = await UserService.login(email, password);
    if (result) {
      // Set token as an HTTP-only cookie
      res.cookie('token', result.token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // Set secure flag in production
        maxAge: 2 * 60 * 60 * 1000, // Token expires in 2 hours
      });
      
      res.json({
        _id: result.user._id,
        email: result.user.email,
        isAdmin: result.user.role === 'admin',
        token: result.token,
      });
    } else {
      res.status(401).json({ error: "Invalid credentials" });
    }
  } catch (error) {
    next(error);
  }
};

// Logout
exports.logout = (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ message: "Logged out successfully" });
};

