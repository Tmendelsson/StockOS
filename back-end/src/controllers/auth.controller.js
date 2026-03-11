const { registerSchema, loginSchema } = require("../validators/auth.validators");
const { registerUser, loginUser, getMe } = require("../services/auth.service");

async function register(req, res, next) {
  try {
    const input = registerSchema.parse(req.body);
    const result = await registerUser(input);

    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
}

async function login(req, res, next) {
  try {
    const input = loginSchema.parse(req.body);
    const result = await loginUser(input);

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
}

async function me(req, res, next) {
  try {
    const user = await getMe(req.auth.sub);
    res.status(200).json({ user });
  } catch (error) {
    next(error);
  }
}

module.exports = { register, login, me };
