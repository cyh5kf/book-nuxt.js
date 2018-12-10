const Router = require('koa-router')
const login = require('./login')

const api = new Router({
    prefix: '/api'
})

//登录接口
// api.get('/login', login);
api.post('/', (ctx)=> {
    ctx.body = 'hello, world!';
})

module.exports = api;