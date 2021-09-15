const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');

const middlewares = jsonServer.defaults();

const express = require('express')
// const DB = './db.json'

// const app = express();


// app.use(express.static(DB))
server.use(middlewares);
server.use(router);



const port = process.env.PORT || 4000;






server.listen(port, console.log(`server is listening to ${port}`))