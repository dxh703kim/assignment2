function setup (){
    createCanvas(1000,1000);
    background(87, 128, 91);

    var i=0;
    var rand = random(1000);
    var rand2 = random(50,1000); //random number between 50~1000
    /*while(i<100){
        fill(random(250));
        // ellipse(50*i,50*i,250,250);
        ellipse(random(1000),random(1000),250,250);
        i=i+1;
    }*/

    // fill(0);
    // noStroke();
    // rect(100,100,100,500);

    // fill(0);
    // stroke(0);
    // ellipse(250,200,300,300);

    // fill(87, 128, 91);
    // stroke(0);
    // ellipse(250,200,200,200); // ellipse(x,y,w,h)
}

function draw(){
    noFill();
    stroke(0);
    ellipse(mouseX,mouseY,random(100,250),random(100,250))
}

// function mousePressed(){
//     saveCanvas("sketch-01","png")
// }