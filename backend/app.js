import express from 'express'
import cors from 'cors'
import multer from 'multer'
import httpProxy from 'http-proxy';

const app = express();
const port = 3000;
const upload = multer({ dest: 'uploads/' });

app.use(cors())
app.use(express.static('./public'))

const proxy = httpProxy.createProxyServer(options); 

http.createServer(function(req, res) {
    proxy.web(req, res, { target: 'https://poe.ninja/api/data/' });
  });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
