const fastify = require("fastify")({
  logger: true
});

const storeRoute = require("./src/api/store/store.route");
const productRoute = require("./src/api/product/product.route");

// Register for OPEN API spec
fastify.register(require("fastify-swagger"), {
  swagger: {
    info: {
      title: "Test swagger",
      description: "testing the fastify swagger api",
      version: "0.1.0"
    }
  },
  exposeRoute: true,
  routePrefix: "/documentation"
});

// Register for routes
fastify.register(storeRoute, {
  prefix: "/store"
});

fastify.register(productRoute, {
  prefix: "/product"
});

fastify.ready(err => {
  if (err) throw err;
  fastify.log.info("Starting Swagger docs");
  fastify.swagger();
});

fastify.listen(3000, (err, add) => {
  if (err) throw err;
  fastify.log.info(`Listening on address: ${add}`);
});
