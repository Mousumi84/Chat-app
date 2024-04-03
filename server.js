const express = require('express');     //import express
const http = require('http');           //import http
const socketIo = require('socket.io');   //import socketio

const SocketIoserver = socketIo.Server;      //socketIoserver is a socket class which can create a server

const app = express();
const httpserver = http.createServer(app);   //convert express-app tp http server

const io = new SocketIoserver(httpserver);   //here io is server attached to http server

app.use(express.static('client'));           //sending the static file 'client' to server

io.on("connection",(socket) => {                  //default event

    socket.on("sending message event",(data) => {    //custom event  , event Listener
        io.emit("io spreading message",data);        //event 
    })
})

//  app.get('/', function (req, res) {
//    res.send('Hello World')
//  }) 

// http server is used to establish connection between browser and terminal

httpserver.listen(3000);