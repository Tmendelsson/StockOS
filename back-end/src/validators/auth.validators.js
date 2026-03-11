const { z } = require("zod");

const registerSchema = z.object({
  name: z.string().min(3).max(120),
  email: z.string().email(),
  password: z.string().min(6).max(72),
  role: z.enum(["ADMIN", "MANAGER", "OPERATOR"]).optional(),
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(72),
});

module.exports = { registerSchema, loginSchema };
