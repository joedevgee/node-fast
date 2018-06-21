const fastify = require("fastify")();
const route = require("./store.route");

describe("# Store API test", () => {
  const postPayload = {
    name: "test in mem",
    website: "test website in mem"
  };
  beforeAll(async () => {
    fastify.register(route);
  });
  afterAll(async () => {
    fastify.close();
  });
  it("should be able to create new store", async () => {
    const resp = await fastify.inject({
      method: "POST",
      url: "/",
      payload: postPayload
    });
    const result = JSON.parse(resp.payload);
    expect(resp.statusCode).toBe(200);
    expect(result.name).toEqual(postPayload.name);
    expect(result.website).toEqual(postPayload.website);
  });
  it("should return a list of stores", async () => {
    const resp = await fastify.inject({
      method: "GET",
      url: "/"
    });
    const result = JSON.parse(resp.payload);
    expect(resp.statusCode).toBe(200);
    expect(result[0].name).toEqual(postPayload.name);
    expect(result[0].website).toEqual(postPayload.website);
  });
});
