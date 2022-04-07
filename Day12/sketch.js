var i = 0;
var p = 0;

function setup(){
    createCanvas(1000,1000);
    background(70);
}

function draw(){

    if(p<370){
        push();
        translate(300, 150);
        noFill();
        stroke(random(360), random(360), random(360));
        rotate(PI / random(3.7,4.0));
        rect(0+p,0+p, random(110,130), random(110,130));
        pop();
        p++

    }

    if(i<=370){
        push();
        translate(520,310);
        noFill();
        stroke(random(360), random(360), random(360));
        rotate(i);
        rect(50,50,random(80,100),random(80,100));
        pop();
        i++
    }

    if(i<=370){
        push();
        translate(540,620);
        noFill();
        stroke(random(360), random(360), random(360));
        rotate(-i);
        rect(60,60,random(110,130),random(110,130));
        pop();
        i++
    }


}

function keyPressed(){
    if(key == 's'){
        saveCanvas("sketch-12","png");
        mouseCheck;
    }
}