var myFont;

function preload(){
    myFont=loadFont('Starborn.ttf')
}

function setup(){
    createCanvas(1000,1000);
    background(0);
}


function draw() {


    const theta = map(millis(), 0, 1000, 0, 1 * PI);
    const pendulumAngle = sin(theta) * 0.3;
    metronome(500, 2560, 20, pendulumAngle);
  
    const color = map(millis() % 1000, 0, 300, 255, 0);
    fill(color,0,0);
  }
  
  function metronome(x, y, size, pendulumAngle) {
    
    push();
    noStroke();
    translate(x, y);
    scale(size);

    push();
    rotate(pendulumAngle);

    stroke(0);
    textFont(myFont);
    text('B',-5,-100);
    pop();


  }
  

