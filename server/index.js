const Koa = require('koa');
const Router = require('koa-router');
const next = require('next');

const server = new Koa();
const router = new Router();

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

async function init() {
  await app.prepare();

  router.get('/', async (ctx) => {
    await app.render(ctx.req, ctx.res, '/home', ctx.query);
    ctx.respond = false;
  });

  router.get('*', async (ctx) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });

  server.use(router.routes());
  server.listen(process.env.APP_PORT, () => console.info(`> Ready on ${process.env.APP_HOST} 🚀`));
}

init();
