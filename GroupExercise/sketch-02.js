var i = 0;
var p = 0;

function setup(){
    createCanvas(1000,1000);
    background(0);
}

function draw(){

    if(i<=190){
        push();
        translate(300,500);
        noFill();
        stroke(250);
        rotate(-i);
        rect(0,0,450,450);
        pop();
        i++
    }

    if(i<=190){
    push();
    translate(0,0);
    fill(0);
    rect(0,0,250,1000);
    pop();
    }


    if(p<=760){
        push();
        translate(150,-400);
        noFill();
        stroke(250);
        rect(0,0+p*2,100,300);
        pop();
        p++
    }
}
