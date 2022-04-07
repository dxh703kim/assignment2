var points;
var fontSize=400;
var myFont;
var p=0;

function preload(){
    myFont=loadFont('myfont.ttf');
}

function setup(){
    createCanvas(1000,1000);
    background(250);
    textSize(400);
    textFont(myFont);
    text('B',500,500);
    frameRate(4);
    points=myFont.textToPoints("B",160,470,fontSize);

}

function draw(){

    background(250);
    noFill();
    stroke(255,0,0);
    textSize(400);
    textFont(myFont);



    for(var i=0; i<points.length; i++){
        push();
        translate(points[i].x,points[i].y);
        fill(random(360), random(360), random(360));
        noStroke();
        rotate(90*p);
        p++
        heart(0,0,10,3);
        pop();
    }
}

function keyPressed(){
    if(key == 's'){
        saveCanvas("sketch-14","png");
    }
}