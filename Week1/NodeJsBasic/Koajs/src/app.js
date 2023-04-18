// const Koa = require('koa');
// const app = new Koa();

// app.use(async ctx => {
//   ctx.body = 'Hello World';
// });

// app.listen(5000);


const Koa = require('koa');
const koaBody = require('koa-body');
const routes = require('./routes/routes.js');

const app = new Koa();

app.use(koaBody());
app.use(routes.routes());
app.use(routes.allowedMethods());

console.log(`sever is running port 5000`)
app.listen(5000);
