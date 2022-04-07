var i = 0;
var bool = false;


function setup(){
    createCanvas(1000,1000);
    background(252, 186, 3);
    angleMode(DEGREES);
}

function draw(){

    if(i<=360){
        push();
        translate(200,140);
        noFill();
        stroke(0, 79, 217);
        rect(0,0+i,230,360);
        pop();
        i++
    }

    if(i<=360){
        push();
        translate(520,310);
        noFill();
        stroke(207, 17, 0);
        rotate(i);
        rect(40,40,90,90);
        pop();
        i++
    }

    if(i<=360){
        push();
        translate(550,620);
        noFill();
        stroke(0, 130, 0);
        rotate(-i);
        rect(60,60,120,120);
        pop();
        i++
    }


}


function keyPressed(){
    if(key == 's'){
        saveCanvas("sketch-11","png");
        mouseCheck;
    }
}