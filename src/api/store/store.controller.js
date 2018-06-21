const Store = require("./store.model");

/**
 * Create new store
 * @async
 * @property {string}
 * @property {string}
 * @returns {Store}
 */
const create = async (req, res) => {
  const savingStore = new Store({
    name: req.body.name,
    website: req.body.website
  });
  const result = await savingStore.save();
  return result;
};

/**
 * get the total count of stores
 * @async
 * @property {string}
 * @property {string}
 * @returns {number}
 */
const list = async (req, resp) => {
  const list = await Store.list();
  return list;
};

module.exports = {
  create,
  list
};
