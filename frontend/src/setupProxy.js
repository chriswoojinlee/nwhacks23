const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/price',
    createProxyMiddleware({
      target: 'http://localhost:8080',
      changeOrigin: true,
    }));
  app.use(
    '/travelInfo', 
    createProxyMiddleware({
        target: 'http://localhost:8080',
        changeOrigin: true,
    }));
};