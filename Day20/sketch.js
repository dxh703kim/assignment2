var myFont;
let yoff = 0.0;

function preload(){
    myFont = loadFont('ComixLoud.ttf');
}

function setup(){
    createCanvas(1000,1000);
    background(0);
    blendMode(HARD_LIGHT);

}


function draw() {

  fill(0);
  beginShape();

  let xoff = 0; 

  for (let x = 0; x <= width; x += 10) {

    let y = map(noise(xoff, yoff), 1.4, 1.1, 200, 300);

    vertex(x, y);
    xoff += 0.01;
  }


  yoff += 0.01;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);


  textSize(500);
  textFont(myFont);
  fill(179, 0, 255);
  noStroke(255);
  text('B',230,700);

}
