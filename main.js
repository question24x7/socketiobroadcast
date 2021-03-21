const express = require('express')
const sck = require('socket.io')
const app = express()
var port = process.env.PORT || 4000
app.use(express.static(__dirname+"/public"))
let server = app.listen(port, function(){
    console.log("I am Working")
})
let ws = sck(server)
ws.on("connection", function(msocket){
    msocket.on("screencast", function(image){
        msocket.broadcast.emit("screencast", image)
    })
    msocket.on("camcast", function(image){
        msocket.broadcast.emit("camcast", image)
    })
    console.log("New Connection with id = "+msocket.id);
})