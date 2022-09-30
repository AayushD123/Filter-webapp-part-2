function preload(){

}

function setup(){
canvas = createCanvas(400,400);
canvas.center();
video = createCapture(VIDEO);
video.hide();

poseNet = ml5.poseNet(video,modelLoaded);

}

function modelLoaded()
{
    console.log("model loaded");
}

function draw(){
image(video,0,0,400,400);
}

function take_snapshot(){
    save('myFilterImage.png');
}



