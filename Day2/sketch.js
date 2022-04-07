function setup (){
    createCanvas(1000,1000);
    background(0);
}
    var i=0;
 
function draw(){
    while(i<70){

        noFill();
        stroke(250);
        ellipse(random(500,590),random(600,730),430,430);
        i++;
    }

       
    while(i<330){
        noFill(255, 184, 163);
        stroke(250);
        ellipse(random(250,300),random(130,880),150,150);
        i=i+1;
    }

}


function mousePressed(){
    saveCanvas("sketch-02","png");
}