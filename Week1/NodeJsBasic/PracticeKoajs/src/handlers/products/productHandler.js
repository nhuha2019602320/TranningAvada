const {
  add: addProduct,
  deleteProduct,
  getProductLists,
  editProduct,
  getProduct,
  getFieldsOfProduct,
} = require("../../database/productRepository");

/**
 *
 * @param {*} ctx
 * @returns
 */
async function getProducts(ctx) {
  try {
    const { limit, sort, fields } = ctx.request.query;
    const products = getProductLists({ limit, sort, fields });
    return (ctx.body = products);
  } catch (e) {
    ctx.status = 404;
    ctx.body = {
      success: false,
      data: [],
      error: e.message,
    };
  }
}

/**
 *
 * @param {*} ctx
 * @returns
 */
async function getProductById(ctx) {
  try {
    const { id } = ctx.params;
    const listFields = ctx.request.query;
    const currentProduct = getProduct(id);
    if (currentProduct) {
      const product = getFieldsOfProduct(currentProduct, id, listFields);
      ctx.body = product;
      return product;
    } 

    ctx.status = 404;
    ctx.body = {
      success: false,
      error: "not existed product",
    };
  } catch (e) {
    ctx.status = 404;
    ctx.body = {
      success: false,
      data: [],
      error: e.message,
    };
  }
}
/**
 *
 * @param {*} ctx
 * @returns
 */
async function updateProduct(ctx) {
  try {
    const { id } = ctx.params;
    const currentProduct = getProduct(id);

    const dataUpdateProduct = ctx.request.body;

    if (currentProduct) {
      const products = editProduct(dataUpdateProduct, id);
      ctx.body = "update success";
      return products;
    }

    ctx.status = 404;
    ctx.body = {
      success: false,
      data: [],
      error: "Update failed",
    };
  } catch (e) {
    ctx.status = 404;
    ctx.body = {
      success: false,
      data: [],
      error: e.message,
    };
  }
}

/**
 *
 * @param {*} ctx
 * @returns
 */
async function removeProduct(ctx) {
  try {
    const { id } = ctx.params;
    const currentProduct = getProduct(id);
    if (currentProduct) {
      deleteProduct(id);
      return (ctx.body = {
        success: true,
        error: "Delete success",
      });
    } 

    return (ctx.body = {
      success: false,
      error: "Delete failed",
    });
  } catch (e) {
    return (ctx.body = {
      success: false,
      error: e.message,
    });
  }
}

/**
 *
 * @param {*} ctx
 * @returns
 */
async function save(ctx) {
  try {
    const postData = ctx.request.body;
    addProduct(postData);
    ctx.status = 201;
    return (ctx.body = {
      success: true,
    });
  } catch (e) {
    return (ctx.body = {
      success: false,
      error: e.message,
    });
  }
}

module.exports = {
  getProducts,
  getProductById,
  updateProduct,
  removeProduct,
  save,
};
