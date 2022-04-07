function setup(){
    createCanvas(1000,1000);
    background(71, 0, 216);
    frameRate(10);
}

function draw(){

    translate(-70,30);

    ellipseMode(RADIUS);
    fill(249, 0, 191,30);
    noStroke();
    ellipse(random(595,605),random(595,605),270,200);
    

    ellipseMode(CENTER);
    fill(71, 0, 216);
    ellipse(random(595,605),random(585,595),220,150);

    fill(249, 0, 191,30);
    rect(random(285,295),random(135,145),180,650);


    ellipseMode(RADIUS);
    fill(249, 0, 191,30);
    ellipse(random(585,595),random(295,305),200,170);

    ellipseMode(CENTER);
    fill(71, 0, 216);
    ellipse(random(575,585),random(315,325),150,120);




}