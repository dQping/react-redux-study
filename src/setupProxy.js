const proxy = require('http-proxy-middleware')
 
module.exports = function(app) {
  app.use(proxy('/api', { target: 'http://localhost:5000/' }))
 // app.use(proxy('/*.svg', { target: 'http://localhost:5000/' }))
}

// 如果请求站点为https，
// 则需要加上这个"changeOrigin":true
// 需要这样写 app.use(proxy('/api', { target: 'https://localhost:5000/',"changeOrigin":true }))
// 否则则会报错: [HPM] Error occurred while trying to proxy request ***此处省略十万八千个字***......



