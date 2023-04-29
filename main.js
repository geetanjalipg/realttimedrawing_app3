
difference=20;
rightWristX=0;
leftWristX=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);



    canvas =createCanvas(500,500);
   canvas.position(550,150);
poseNet=ml5.poseNet(video,modeloaded);
poseNet.on('pose', gotPoses);

}
function  modeloaded(){
    console.log(('PoseNet Is Initialized'));
}

function draw(){
    background("#367596");
document.getElementById("size").innerHTML ="Size of the Font  will be = " + difference; 
 fill("#6bc299");
stroke("#6bc299");
text ("Naamya",100,250);
textSize(difference);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
       difference=floor(leftWristX-rightWristX);
       console.log("leftWristX = " + leftWristX + "rightWristX = "+rightWristX+ "difference = "+ difference);
    }
}