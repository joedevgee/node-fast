const fastify = require("fastify")();
const route = require("./product.route");

describe("# Product API test", () => {
  const postPayload = {
    brand_name: "Test Brand",
    product_name: "Test product",
    product_id: "123",
    product_price: 100,
    product_url: "example.com"
  };
  beforeAll(async () => {
    fastify.register(route);
  });
  afterAll(async () => {
    fastify.close();
  });
  it("should be able to save new product", async () => {
    const resp = await fastify.inject({
      method: "POST",
      url: "/",
      payload: postPayload
    });
    const result = JSON.parse(resp.payload);
    expect(resp.statusCode).toBe(200);
  });
  it("should return a list of 1 stores", async () => {
    const resp = await fastify.inject({
      method: "GET",
      url: "/?brand_name=test&product_name=test"
    });
    const result = JSON.parse(resp.payload);
    expect(resp.statusCode).toBe(200);
    expect(result.length).toEqual(1);
    expect(result[0].product_name).toEqual(postPayload.product_name);
  });
});
