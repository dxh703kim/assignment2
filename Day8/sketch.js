
function setup() {
    createCanvas(1000, 1000, WEBGL);
    setAttributes('antialias', true);
  }

  function draw() {

    rotateY(frameCount*0.03);
    
    
    orbitControl();
    background(14,29,95);
    strokeWeight(4);

    stroke(0,255,221);

    strokeWeight(60);
    noFill();
  
    beginShape();
    vertex(0, -270,0);
    bezierVertex(0, -270, 100, 300, -200, -160, 0, -50, 100);
    endShape();

      
    beginShape();
    vertex(0, -50, 50);
    bezierVertex(0, -50, 100, 300, 70, 100, 0, 250, 100);
    endShape();

    beginShape();
    vertex(0, -270, 50);
    bezierVertex(0, 250, 300, -100, 0, -50, 0, 250, 100);
    endShape();
  


    stroke(232, 255, 194,30);

    strokeWeight(80);
    noFill();
  
    beginShape();
    vertex(10, -260,0);
    bezierVertex(10, -220, 110, 310, -190, -150, 10, -40, 110);
    endShape();

      
    beginShape();
    vertex(10, -40, 60);
    bezierVertex(10, -40, 110, 310, 80, 110, 10, 260, 110);
    endShape();

    beginShape();
    vertex(10, -260, 60);
    bezierVertex(10, 260, 310, -90, 10, -40, 10, 260, 110);
    endShape();

  }