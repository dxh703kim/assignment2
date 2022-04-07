var myFont;
var letterPoints;
var fontSize = 650;
var p = 0;
var mic;

function preload(){
    myFont=loadFont('Starborn.ttf')
}


function setup(){
    createCanvas(1000,1000);

    letterPoints=myFont.textToPoints("B",205,710,fontSize)

    userStartAudio();
    mic = new p5.AudioIn();
    mic.start();
}

function draw(){

    background(85, 132, 172);
    textFont(myFont);

    var micLevel = mic.getLevel();
    var scaleLevel = micLevel*100;
    console.log(scaleLevel);


    for(var i=0; i<letterPoints.length; i++){
        push();
        translate(letterPoints[i].x,letterPoints[i].y);
        fill(random(200,250), random(205,255), random(125,175));
        rotate(65*p);
        p++
        heart(random(0,20),random(0,20),3+random(10)*scaleLevel,0.01);
        pop();
    }
}