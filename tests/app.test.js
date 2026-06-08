const request = require("supertest");
const app = require("../app");

describe("Task Manager API", () => {
  test("GET /health should return healthy status", async () => {
    const response = await request(app).get("/health");

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe("healthy");
    expect(response.body.service).toBe("CodeAlpha Azure CI/CD Task Manager");
  });

  test("GET /api/tasks should return a task list", async () => {
    const response = await request(app).get("/api/tasks");

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  test("POST /api/tasks should add a new task", async () => {
    const response = await request(app)
      .post("/api/tasks")
      .send({ title: "Test Azure Pipeline" });

    expect(response.statusCode).toBe(201);
    expect(response.body.title).toBe("Test Azure Pipeline");
    expect(response.body.completed).toBe(false);
  });

  test("POST /api/tasks should reject an empty task title", async () => {
    const response = await request(app)
      .post("/api/tasks")
      .send({ title: "" });

    expect(response.statusCode).toBe(400);
    expect(response.body.message).toBe("Task title is required");
  });
});