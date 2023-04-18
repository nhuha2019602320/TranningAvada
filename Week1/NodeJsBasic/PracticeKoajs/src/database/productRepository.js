const fs = require("fs");
const { data: products } = require("./products.json");
const { sortArrayObject, pick } = require("../service/libraryArrayObj");

/**
 *
 * @returns
 */
function getAll() {
  return products;
}

/**
 *
 * @param {*} param0
 * @returns
 */
function getProductLists({ limit = null, sort = null, fields = null } = {}) {
  let result = products;

  if (sort) {
    result = result.sort(sortArrayObject("createdAt", sort));
  }
  if (limit) {
    result = result.slice(0, limit);
  }
  if (fields) {
    result = result.map(product => pick(product, fields.split(',')));
  }

  return result;
}

/**
 *
 * @param {*} id
 * @returns
 */
function getProduct(id) {
  return products.find((product) => product.id === id);
}

/**
 *
 * @param {*} product
 * @param {*} litFields
 */
function getFieldsOfProduct(product, litsFields) {
  const splitField = litsFields.fields.split(",");

  return pick(product, splitField);
}
/**
 *
 * @param {*} data
 * @returns
 */
function editProduct(dataUpdate, id) {
  const currentProduct = getProduct(id);
  if (currentProduct) {
    const dataProdcts = readFile();
    const dataChange = dataProdcts.map((product) => {
      if (product.id === id) {
        return {...product, ...dataUpdate}
      }
      return product;
    });

    saveFile(dataChange);
  }
}

/**
 *
 * @param {*} id
 * @returns
 */
function deleteProduct(id) {
  const productDelete = products.filter((product) => product.id !== id);
  
  saveFile(productDelete);
}

/**
 *
 * @param {*} data
 * @returns
 */
function add(data) {
  const updateProducts = [...products, data];

  return fs.writeFileSync(
    "./src/database/products.json",
    JSON.stringify({
      data: updateProducts,
    })
  );
}

/**
 *
 * @param {*} dataFile
 * @returns
 */
function saveFile(dataFile) {
  return fs.writeFileSync(
    "./src/database/products.json",
    JSON.stringify({ data: dataFile })
  );
}

/**
 *
 * @returns
 */
function readFile() {
  return JSON.parse(fs.readFileSync("./src/database/products.json")).data;
}

module.exports = {
  getAll,
  getProductLists,
  getProduct,
  editProduct,
  deleteProduct,
  getFieldsOfProduct,
  add,
};
