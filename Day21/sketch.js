let x;
let y;
let outsideRadius1 = 200;
let insideRadius1 = 80;
let outsideRadius2 = 230;
let insideRadius2 = 100;

function setup(){
    createCanvas(1000,1000);
    background(0,189,170);
    frameRate(10);
}


function draw() {

    let numPoints = int(map(mouseX, 0, width, 6, 60));
    let angle = 0;
    let angleStep = 180.0 / numPoints;

    fill(254,52,110);
    stroke(241,231,181);
    strokeWeight(3);

    translate(random(-120,-100),random(-10,10));
    beginShape(TRIANGLE_STRIP);
    vertex(400,160);
    vertex(300,830);
    vertex(500,830);
    vertex()
    endShape();


    beginShape(TRIANGLE_STRIP);
    vertex(400,160);
    vertex(600,160);
    vertex(500,830);
    vertex()
    endShape();


  x = random(640,660);
  y = random(620,640);

  beginShape(TRIANGLE_STRIP);

  for (let i = 0; i <= numPoints; i++) {
    let px = x + cos(radians(angle)) * outsideRadius2;
    let py = y + sin(radians(angle)) * outsideRadius2;
    angle += angleStep;
    vertex(px, py);
    px = x + cos(radians(angle)) * insideRadius2;
    py = y + sin(radians(angle)) * insideRadius2;
    vertex(px, py);
    angle += angleStep;
  }
  endShape();


  x = random(640,660);
  y = random(320,340);

beginShape(TRIANGLE_STRIP);
for (let i = 0; i <= numPoints; i++) {
  let px = x + cos(radians(angle)) * outsideRadius1;
  let py = y + sin(radians(angle)) * outsideRadius1;
  angle += angleStep;
  vertex(px, py);
  px = x + cos(radians(angle)) * insideRadius1;
  py = y + sin(radians(angle)) * insideRadius1;
  vertex(px, py);
  angle += angleStep;
}
endShape();



}
