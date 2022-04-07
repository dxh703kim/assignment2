function setup(){
    createCanvas(1000,1000,WEBGL);
    background(154,220,255);
    frameRate(10);
}

function draw(){
    
    strokeWeight(1);
    stroke(255,248,154);
    noFill();

    translate(-455,-510);


    line(random(80,120),random(100,120),random(700,760),random(100,120));
    line(random(100,120),random(80,120),random(100,120),random(890,930));
    line(random(80,120),random(880,900),random(720,760),random(880,900));
    line(random(790,810),random(160,200),random(790,810),random(800,840));
    
    line(random(700,720),random(80,100),random(810,830),random(220,240));
    line(random(680,700),random(900,920),random(800,820),random(780,800));




    translate(300,150);
    beginShape();
    vertex(random(90,110),random(90,110));
    vertex(random(290,310),random(90,110));
    vertex(random(290,310),random(290,310));
    vertex(random(90,110),random(290,310));
    vertex(random(90,110),random(90,110));
    endShape();

    translate(0,300);
    beginShape();
    vertex(random(90,110),random(90,110));
    vertex(random(290,310),random(90,110));
    vertex(random(290,310),random(290,310));
    vertex(random(90,110),random(290,310));
    vertex(random(90,110),random(90,110));
    endShape();

}
