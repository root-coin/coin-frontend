const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app){
    //target : backend url
    app.use(
        createProxyMiddleware('/api', {
            target: 'http://www.backend.url',
            changeOrigin: true
        })
    )
};