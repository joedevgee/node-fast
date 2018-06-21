const mongoose = require("mongoose");
const fp = require("fastify-plugin");
const MongodbMemoryServer = require("mongodb-memory-server");
let url = "mongodb://localhost:27017";

const connectMongoose = async (fastify, options, next) => {
  try {
    mongoose.Promise = global.Promise;
    if (process.env.NODE_ENV === "test") {
      // Connect to test db
      const mongoServer = new MongodbMemoryServer.MongoMemoryServer();
      url = await mongoServer.getConnectionString();
      mongoose.connection.on("error", e => {
        console.debug("Failed to connect with mongo mem test db", e);
      });
      // Method to close mem mongo server
      fastify.addHook("onClose", async () => {
        await mongoose.disconnect();
        await mongoServer.stop();
      });
    }
    await mongoose.connect(
      url,
      options
    );
  } catch (err) {
    throw new Error(err);
  }
  next();
};

module.exports = fp(connectMongoose);
