function setup (){
    createCanvas(1000,1000);
    background(87, 128, 91);

    var i=0;
    var rand = random(1000);
    var rand2 = random(50,1000);
    while(i<200){
        noStroke();
        fill(random(150));
        ellipse(random(1000),random(1000),250,250);
        i=i+1;
    }
}

function draw(){
    fill(255);
    stroke(0);
    ellipse(mouseX,mouseY,150,150)
}
