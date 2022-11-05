import httpProxy from 'http-proxy'
import http from 'http'

const proxy = httpProxy.createProxyServer({});
 
proxy.on('proxyReq', function(proxyReq, req, res, options) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
});
 
http.createServer(function(req, res) {
  proxy.web(req, res, {
    target: 'https://poe.ninja/api/data/',
    changeOrigin: true, 
    secure: false
  });
}).listen(8081);