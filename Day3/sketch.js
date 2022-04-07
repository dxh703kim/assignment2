
function setup(){
    createCanvas(1000,1000);
    background(50);
    angleMode(DEGREES);
}

function draw(){

    rect(240,120,150,750);

    translate(530,620);

    var p = 0;

    for(i=0; i<200; i++){
        rotate(i);
        noFill();
        stroke(131, 191, 88);
        strokeWeight(2);
        rect(0,0,30,250);
    }

    while(p<180){
        rotate(p);
        fill(135, 232, 65);
        stroke(250);
        rect(0,0,30,200);
        p++;
    }
    
}


function keyPressed(){
    if(key == 's'){
        saveCanvas("sketch-03","png");
        mouseCheck;
    }
}