noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;


function setup(){
    video = createCapture(VIDEO);
    video.size(400, 400);

    canvas = createCanvas(500, 450);
    canvas.position(550, 160);

    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotPoses);
}

function modelloaded(){
    console.log(" Model is Loaded");
}

function draw(){
    background("lightpink");

    document.getElementById("font").innerHTML = "Length of the font will be = " + difference + 'px';
    textSize(difference);
    fill("black");
    text("Estrella",noseX, noseY);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX +" noseY = " + noseY);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX = " + leftWristX + "rightWristX = "+ rightWristX);
    }
}
