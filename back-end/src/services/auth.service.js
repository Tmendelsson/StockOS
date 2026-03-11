const bcrypt = require("bcryptjs");
const { AppError } = require("../utils/app-error");
const { signAccessToken } = require("../utils/jwt");
const { findUserByEmail, findUserById, createUser } = require("../repositories/users.repository");

function publicUser(user) {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    created_at: user.created_at,
    updated_at: user.updated_at,
  };
}

async function registerUser(input) {
  const existing = await findUserByEmail(input.email);
  if (existing) {
    throw new AppError("Email already in use", 409);
  }

  const passwordHash = await bcrypt.hash(input.password, 10);
  const user = await createUser({
    name: input.name,
    email: input.email,
    password_hash: passwordHash,
    role: input.role || "OPERATOR",
  });

  const token = signAccessToken({ sub: user.id, role: user.role });
  return { token, user: publicUser(user) };
}

async function loginUser(input) {
  const user = await findUserByEmail(input.email);
  if (!user) {
    throw new AppError("Invalid credentials", 401);
  }

  const isValidPassword = await bcrypt.compare(input.password, user.password_hash);
  if (!isValidPassword) {
    throw new AppError("Invalid credentials", 401);
  }

  const token = signAccessToken({ sub: user.id, role: user.role });
  return { token, user: publicUser(user) };
}

async function getMe(userId) {
  const user = await findUserById(userId);
  if (!user) {
    throw new AppError("User not found", 404);
  }

  return publicUser(user);
}

module.exports = { registerUser, loginUser, getMe };
