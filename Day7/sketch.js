var myFont;

function preload(){
    myFont=loadFont('CrystalUniverse-Regular.ttf');
}

function setup(){
    createCanvas(1000,1000);
    background(0);
}


function draw(){
    
    // fill(0);
    // textSize(900);
    // text('B',200,800);

    rectMode(CORNERS);
    fill(random(0,255),random(0,255),random(0,255),random(50,90));
    textSize(400);
    rotate(random(90));
    text('B',random(-100,900),random(-100,900),500,500);
}