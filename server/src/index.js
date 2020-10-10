'use strict'
const http = require("http");
const {Sequelize} = require('sequelize');
const express = require('express');
const socketIO = require('socket.io');
const {PORT} = require('./config/constants');
const socksHandler = require('./ws');
const app = express();
const server = http.Server(app);
const io = socketIO(server);

const session = require('express-session')

const sessionMiddleware = session({
    key: "sid",
    //store: new RedisStore({ client: redisClient }),
    secret: "fdjgo0ipdfjobdoigjrt890eh5430845ht",
    saveUninitialized: false,
    cookie: {
        expires: 600000
    },
    resave: false,
});

io.use(function(socket, next) {
    sessionMiddleware(socket.request, socket.request.res, next);
});
app.use(sessionMiddleware);

io.on('connection', socksHandler);

server.listen(PORT, ()=>{console.log(`Server is listening on port ${PORT}`)});

