const request = require("supertest");
const app = require("../app");

describe("GET /api/health", () => {
  it("returns API status", async () => {
    const response = await request(app).get("/api/health");

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe("ok");
  });
});
