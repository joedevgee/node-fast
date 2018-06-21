const fastify = require("fastify")({
  logger: true
});

const storeRoute = require("./src/api/store/store.route");

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

fastify.ready(err => {
  if (err) throw err;
  fastify.swagger();
});

fastify.listen(3000, (err, add) => {
  if (err) throw err;
  fastify.log.info(`Listening on address: ${add}`);
});
