function setup(){
    createCanvas(1000,1000,WEBGL);
    background(0);
}

function draw(){


    translate(0,-150);

    // rotateX(frameCount*0.03);
    rotateY(frameCount*0.03);


    fill(0);
    stroke(255, 255, 232);
    torus(90,70);

    translate(10,260);
    fill(0);
    stroke(255, 255, 232);

    torus(100,80);

    translate(-200,-115);
    cylinder(80,540);
}