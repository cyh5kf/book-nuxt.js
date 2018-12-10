
const Koa = require('koa')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const json = require('koa-json')
const logger = require('koa-logger')
const convert = require('koa-convert')
const bodyParser = require('koa-bodyparser')
const api = require('./router')

const app = new Koa()
const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 3000

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(app.env === 'production')

async function start() {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // 记录所用方式与时间
  app.use(convert(logger()))

  // 传输JSON
  // app.use(convert(json()))

  // body解析
  // app.use(bodyParser())

  //api路由
  // app.use(api.routes());

  app.use(ctx => {
    ctx.status = 200 // koa defaults to 404 when it sees that status is unset

    return new Promise((resolve, reject) => {
      ctx.res.on('close', resolve)
      ctx.res.on('finish', resolve)
      nuxt.render(ctx.req, ctx.res, promise => {
        // nuxt.render passes a rejected promise into callback on error.
        promise.then(resolve).catch(reject)
      })
    })
  })

  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()
