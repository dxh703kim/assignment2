var i = 0;
var p=0;

function setup(){
    createCanvas(1000,1000);
    background(0);
    angleMode(DEGREES);
    frameRate(120);
}

function draw(){

    if(i<=90){
        push();
        translate(230,500);
        noFill();
        stroke(250);
        strokeWeight(2);
        rotate(-i);
        rect(0,0,500,500);
        pop();
        i++
    }


    if(i<=460){
        push();
        translate(130,-180);
        noFill();
        stroke(250);
        rect(0,0+i*2,100,300);
        pop();
        i++
    }

}

function keyPressed(){
    if(key == 's'){
        saveCanvas("sketch","png");
        mouseCheck;
    }
}

