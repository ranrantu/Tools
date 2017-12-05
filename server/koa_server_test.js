const Koa = require('koa');
const fs = require('fs');

const app = new Koa();

app.use(async ctx => {
  ctx.response.type = 'html';
  ctx.response.body = fs.createReadStream('../webpage/hello.html');
});

app.listen(3000);
