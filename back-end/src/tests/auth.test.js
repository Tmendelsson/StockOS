jest.mock("../config/prisma", () => ({
  prisma: {
    user: {
      findUnique: jest.fn(),
      create: jest.fn(),
    },
  },
}));

const jwt = require("jsonwebtoken");
const request = require("supertest");
const app = require("../app");
const { prisma } = require("../config/prisma");

describe("Auth routes", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("POST /api/auth/register returns token and user", async () => {
    prisma.user.findUnique.mockResolvedValueOnce(null);
    prisma.user.create.mockResolvedValueOnce({
      id: "u_1",
      name: "Admin",
      email: "admin@stockos.com",
      password_hash: "hashed",
      role: "ADMIN",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    });

    const response = await request(app).post("/api/auth/register").send({
      name: "Admin",
      email: "admin@stockos.com",
      password: "123456",
      role: "ADMIN",
    });

    expect(response.statusCode).toBe(201);
    expect(response.body.token).toBeDefined();
    expect(response.body.user.email).toBe("admin@stockos.com");
  });

  it("POST /api/auth/login fails with invalid credentials", async () => {
    prisma.user.findUnique.mockResolvedValueOnce(null);

    const response = await request(app).post("/api/auth/login").send({
      email: "missing@stockos.com",
      password: "123456",
    });

    expect(response.statusCode).toBe(401);
    expect(response.body.message).toBe("Invalid credentials");
  });

  it("GET /api/auth/me requires token", async () => {
    const response = await request(app).get("/api/auth/me");

    expect(response.statusCode).toBe(401);
  });

  it("GET /api/auth/me returns profile for authenticated user", async () => {
    const token = jwt.sign({ sub: "u_1", role: "ADMIN" }, process.env.JWT_SECRET, { expiresIn: "1d" });

    prisma.user.findUnique.mockResolvedValueOnce({
      id: "u_1",
      name: "Admin",
      email: "admin@stockos.com",
      password_hash: "hashed",
      role: "ADMIN",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    });

    const response = await request(app)
      .get("/api/auth/me")
      .set("Authorization", `Bearer ${token}`);

    expect(response.statusCode).toBe(200);
    expect(response.body.user.id).toBe("u_1");
  });
});
