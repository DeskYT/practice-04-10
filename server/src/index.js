'use strict'
const http = require("http");
const {Sequelize} = require('sequelize');
const express = require('express');
const socketIO = require('socket.io');
const routers = require('./routers');
const {PORT} = require('./config/constants');
const socksHandler = require('./ws');
const app = express();
const server = http.Server(app);
const io = socketIO(server);
app.use(routers);

io.on('connection', socksHandler);

server.listen(PORT, ()=>{console.log(`Server is listening on port ${PORT}`)});

