const Product = require("./product.model");

const saveProduct = async (req, res) => {
  const savingProduct = new Product(req.body);
  const result = await savingProduct.save();
  return result;
};

const findProducts = async (req, res) => {
  const query = req.query;
  const limit = query.limit ? query.limit : 1;
  delete query.limit;
  // modify query string to mongoose query
  Object.keys(query).map(k => {
    const rePattern = new RegExp(`${query[k].trim()}`, "i");
    query[k] = rePattern;
  });
  const pList = await Product.find(query)
    .limit(limit)
    .exec();
  return pList;
};

module.exports = {
  saveProduct,
  findProducts
};
