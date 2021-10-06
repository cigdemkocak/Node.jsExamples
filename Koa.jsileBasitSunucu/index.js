const Koa = require('koa');
const KoaRouter = require('koa-router');
const app = new Koa();
const router = new KoaRouter();

router.get('/', ctx => (ctx.body = 'ANASAYFA'));
router.get('/about', ctx => (ctx.body = 'HAKKIMDA'));
router.get('/contact', ctx => (ctx.body = 'ILETISIM'));
router.get('/test', ctx => (ctx.body = '404 NOT FOUND'));

app.use(router.routes()).use(router.allowedMethods());

const port = 3000;

app.listen(port, () => {
    console.log(`Sunucu ${port} portunda başladı `)
});
