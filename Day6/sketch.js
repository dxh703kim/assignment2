var scribble = new Scribble();
var i = 0;
var p = 0;

function setup(){
    createCanvas(1000,1000);
    background(182, 255, 206);
    angleMode(DEGREES);
    frameRate(1000);
}

function draw(){

    if(p<=200){
        push();
        stroke(random(246,255), random(168,255), random(164,170) );
        strokeWeight(4);
        scribble.scribbleRect(100,550+4*p,200,700);
        pop();
        p++
    }

    if(i<=90){
        push();
        translate(500,500);
        stroke(random(246,255), random(168,255), random(164,170) );
        strokeWeight(4);
        rotate(-i);
        scribble.scribbleRect(100,100,200,200);
        pop();
        i++
    }


    if(i<=360){
        push();
        translate(500,500);
        stroke(random(246,255), random(168,255), random(164,170) );
        strokeWeight(4);
        rotate(i);
        scribble.scribbleRect(400,400,200,200);
        pop();
        i++
    }

    translate(480,450);
    noStroke()
    fill(182, 255, 206);
    rect(0,0,320,100);



    // scribble.scribbleFilling(400,400,600,600,2,45);

}
