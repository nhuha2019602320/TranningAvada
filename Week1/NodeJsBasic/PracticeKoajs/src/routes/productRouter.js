const Router = require("koa-router");
const productHandeler = require("../handlers/products/productHandler");
const productInputMiddleware = require("../middleware/validationUpdateJson");
const { getAll } = require("../database/productRepository");

/**
 * 
 */
const router = new Router({
  prefix: "/api",
});
router.get("/product", async (ctx) => {
  const products = getAll();
  await ctx.render("/pages/product", {
    products,
  });
});

router.get("/products", productHandeler.getProducts);

router.post("/products", productHandeler.save);

router.put(
  "/product/:id",
  productInputMiddleware,
  productHandeler.updateProduct
);

router.delete("/product/:id", productHandeler.removeProduct);

router.get("/product/:id", productHandeler.getProductById);

module.exports = router;
