const controller = require("./product.controller");
const schema = require("./product.schema");
const connectMongoose = require("../../database/mongo-connector");

const route = async fastify => {
  fastify.register(connectMongoose, {
    dbName: "fashion"
  });
  fastify.get("/", schema.findProductsSchema, controller.findProducts);
  fastify.post("/", {}, controller.saveProduct);
};

module.exports = route;
