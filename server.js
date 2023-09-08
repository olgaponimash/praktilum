import express from "express";
import ViteExpress from "vite-express";
import { resolve } from "path";

const app = express();
const port = process.env.PORT || 3000;

app.use('/assets', express.static('assets'))

app.get('/', function(req,res) {
    res.sendfile('index.html');
});

ViteExpress.listen(app, port, () => console.log("Server is listening..."));
