import express from "express";
import ViteExpress from "vite-express";
import { resolve } from "path";

const app = express();

app.use('/assets', express.static('assets'))

app.get('/', function(req,res) {
    res.sendfile('index.html');
});

ViteExpress.listen(app, 3000, () => console.log("Server is listening..."));
