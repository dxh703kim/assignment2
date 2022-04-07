var p = 0;

function setup(){
    createCanvas(1000,1000);
    background(0);
    rectMode(CENTER);
    frameRate(30);
}

function draw(){

    for(var i=0; i<360; i++){
        if(p%60==0){
            r = random(255);
            g = random(255);
            b = random(255);
        }
        noFill();
        stroke(r,g,b);
        rect(300,500,200,700);
    }

    translate(550,620);
    push();
    showLetter(0,0,300);
    rotate(30+p)
    showLetter(0,0,300);
    pop();
    p++
}

function showLetter(x,y,w){
    if(p%60==0){
        r = random(255);
        g = random(255);
        b = random(255);
    }

    noFill(250);
    stroke(r,g,b);
    rect(x,y,0,200);
    rect(x-50,y,w,250);
    rect(x+50,y,w,250);

}