const controller = require("./store.controller");
const schema = require("./store.schema");
const connectMongoose = require("../../database/mongo-connector");

const route = async fastify => {
  fastify.register(connectMongoose, {
    dbName: "store"
  });
  fastify.get("/", schema.listSchema, controller.list);
  fastify.post("/", schema.createSchema, controller.create);
};

module.exports = route;
