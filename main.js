noseX=0;
noseY=0;
diffrences = 0;
rightWrist = 0;
leftWrist = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas= createCanvas(550, 500);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video,modelLodded);
    poseNet.on('pose',gotPoses);
}  

function modelLodded() {
    console .log('PoseNet Is Initialized!');
}

function draw() {
    background('#969A97');
    textSize(20 px);
    fill('#F90093');
    square(noseX, noseY, diffrences);
}

function gotPoses(results) {
    if(results.length > 0)
    {
       console.log(results);
       noseX = results[0].pose.nose.x;
       noseY = results[0].pose.nose.y;
       console.log("noseX = "+ noseX +"noseY ="+ noseY);

       leftWristX = results[0].pose.leftWrist.x;
       rightWristX = results[0].pose.rightWrist.x;
       diffrences = floor(leftWristX - rightWristX);

       console.log("leftWristX = " + leftWristX +"rightWristX ="+ rightWristX + "diffrence ="+ diffrences)
    }

}

function canvas()
{
    text('Aarya', 30,300);
}
