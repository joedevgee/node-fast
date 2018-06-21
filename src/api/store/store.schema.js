const listSchema = {
  schema: {
    // Begin of swagger
    description: "Show a list of stores",
    summary: "List stores",
    // End of swagger
    response: {
      200: {
        type: "array",
        items: {
          type: "object",
          properties: {
            _id: { type: "string" },
            name: { type: "string" },
            createdAt: { type: "string", format: "date-time" },
            website: { type: "string" },
            __v: { type: "number" }
          }
        }
      }
    }
  }
};

const createSchema = {
  schema: {
    // Begin of swagger
    description: "Create and save a new store to the database",
    summary: "Create store",
    params: {
      type: "object",
      properties: {
        name: {
          type: "string",
          description: "Name of the store"
        },
        website: {
          type: "string",
          description: "Website of the store"
        }
      }
    },
    // End of swagger
    body: {
      type: "object",
      properties: {
        name: { type: "string" },
        website: { type: "string" }
      }
    },
    response: {
      200: {
        type: "object",
        properties: {
          _id: { type: "string" },
          name: { type: "string" },
          createdAt: { type: "string", format: "date-time" },
          website: { type: "string" },
          __v: { type: "number" }
        }
      }
    }
  }
};

module.exports = {
  listSchema,
  createSchema
};
