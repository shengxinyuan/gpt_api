import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import Router from 'koa-router';
import handleApiRes from './middlewares/handleApiRes.js';
import chat from './lib/index.js';

const router = new Router();
router.use(handleApiRes());


router.post('/api/chatGPT', chat)

process.on('uncaughtException', (err) => {
  console.error(err);
});

const app = new Koa();
app
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods())

async function start() {
  app.listen(8333, () => {
    console.log("启动成功", 8333);
  });
}
start();
