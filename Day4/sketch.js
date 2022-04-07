function setup(){
    createCanvas(1000,1000);
    background(255, 59, 203);
}

function draw(){

    fill(59, 255, 72);
    stroke(59, 255, 72);
    rect(250,110,180,770);

    translate(535,700);

    fill(59, 255, 72);
    stroke(59, 255, 72);
    rotate(4.3);
    arc(50, 50, 480, 480, 0, PI + QUARTER_PI, OPEN);
}

function keyPressed(){
    if(key == 's'){
        saveCanvas("sketch-04","png");
    }
}