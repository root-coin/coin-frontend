const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app){
    //target : backend url
    app.use(
        createProxyMiddleware('/api', {
            target: 'https://coin-backend-pbpsl.run.goorm.io',
            changeOrigin: true
        })
    )
};