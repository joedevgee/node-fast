const saveProductSchema = {
  schema: {
    // Begin of Swagger
    // End of Swagger
  }
};

const findProductsSchema = {
  schema: {
    // Begin of Swagger
    description: "Find products with options",
    summary: "Find by query",
    // End of Swagger
    querystring: {
      brand_name: { type: "string", description: "The brand name" },
      product_name: { type: "string", description: "The product name" },
      limit: {
        type: "number",
        description: "Number of results to return, default to 1"
      }
    },
    response: {
      200: {
        type: "array",
        items: {
          type: "object",
          properties: {
            brand_name: { type: "string" },
            product_name: { type: "string" },
            product_price: { type: "number" },
            product_promotion_price: { type: "number" },
            product_discount: { type: "string" },
            product_id: { type: "string" },
            product_images: {
              type: "array",
              items: { type: "string" }
            }
          }
        }
      }
    }
  }
};

module.exports = {
  saveProductSchema,
  findProductsSchema
};
