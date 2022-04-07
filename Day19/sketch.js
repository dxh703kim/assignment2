
function setup() {
  createCanvas(1000, 1000, WEBGL);
}

function draw() {
  background(0);

  let locX = mouseX - height / 2;
  let locY = mouseY - width / 2;

  ambientLight(60, 60, 60);
  pointLight(255, 255, 255, locX, locY, 100);

 
  push();

  normalMaterial();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);

  translate(-170,0);
  cylinder(100,600);

  translate(230,-150);
  torus(130, 70, 64, 64);

  translate(0,300);
  torus(130, 70, 64, 64);

  pop();


}
