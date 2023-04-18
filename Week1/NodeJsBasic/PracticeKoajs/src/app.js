const Koa = require("koa");
const koaBody = require("koa-body");
const routes = require("./routes/productRouter.js");
const render = require("koa-ejs");
const path = require("path");
const app = new Koa();

app.use(koaBody());
render(app, {
  root: path.join(__dirname, "views"),
  layout: "/layout/template",
  viewExt: "html",
  cache: false,
  debug: true,
});
app.use(routes.routes());
app.use(routes.allowedMethods());
console.log("server is listening on port 5000");
app.listen(5000);