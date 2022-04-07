var points;
var p=0;
var fontSize=500;
var myFont;

function preload(){
    myFont=loadFont('Blazed.ttf');
}

function setup(){
    createCanvas(1000,1000);
    background(0);
    text('B',0,0);
    frameRate(10);

    points=myFont.textToPoints("B",0,0,fontSize)

}

function draw(){

    background(0);
    translate(130,665);
    noFill();
    stroke(182, 255, 206);

    for(var i=0; i<points.length; i++){
        push();
        translate(points[i].x,points[i].y);
        fill(random(171,209), random(28,120), random(38),80);
        rotate(130*p);
        hexagon(random(2),random(2),15,0.1);
        pop();

    }
}