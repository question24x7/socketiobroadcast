var sio = io();
var screencanvas = document.getElementById("screencanvas");
var screencontext = screencanvas.getContext('2d');
screencanvas.width = 800;
screencanvas.height = 600;

screencontext.width = screencanvas.width;
screencontext.height = screencanvas.height;


var screen = document.getElementById("screen");

var camcanvas = document.getElementById("camcanvas");
var camcontext = camcanvas.getContext('2d');
camcanvas.width = 400;
camcanvas.height = 400;

camcontext.width = camcanvas.width;
camcontext.height = camcanvas.height;


var cam = document.getElementById("cam");

navigator.getUserMedia({video: true , audio: false}, 
function (stream){
    cam.srcObject = stream;
}, function(err){
    console.log(err);
}); 

    navigator.mediaDevices.getDisplayMedia({video:true})
    .then((stream)=>{
        screen.srcObject = stream;
    })
    .catch((err)=>{
        console.log(err);
    });

function viewScreen(video, context) {
    context.drawImage(video, 0, 0, context.width, context.height);
    sio.emit("screencast", screencanvas.toDataURL("image/webp"));
}

function viewCam(video, context) {
    context.drawImage(video, 0, 0, context.width, context.height);
    sio.emit("camcast", camcanvas.toDataURL("image/webp"));
}

setInterval(function(){
    viewScreen(screen,screencontext);
    viewCam(cam,camcontext);
},1);
