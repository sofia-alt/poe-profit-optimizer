import express from 'express'
import cors from 'cors'
import httpProxy from 'http-proxy'
import http from 'http'

const app = express();
const port = 3000;

app.use(cors())
app.use(express.static('./public'))

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

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
