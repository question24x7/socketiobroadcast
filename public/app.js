var sio = io();
var imgscreen = document.getElementById("imgscreen");
var imgcam = document.getElementById("imgcam");
sio.on("screencast", function(image){
    imgscreen.src = image;
});
sio.on("camcast", function(image){
    imgcam.src = image;
});
