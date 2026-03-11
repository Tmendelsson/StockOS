const { prisma } = require("../config/prisma");

async function findUserByEmail(email) {
  return prisma.user.findUnique({ where: { email } });
}

async function findUserById(id) {
  return prisma.user.findUnique({ where: { id } });
}

async function createUser(data) {
  return prisma.user.create({ data });
}

module.exports = { findUserByEmail, findUserById, createUser };
