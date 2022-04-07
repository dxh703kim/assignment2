var myFont;

function preload(){
    myFont=loadFont('I-pixel-u.ttf')
}


function setup(){
    createCanvas(1000,1000);
    background(50,50,50);
    frameRate(10);
}

function draw(){

    img = createImage(100,100);
    img.loadPixels();
    
    for(let y=0; y<img.height; y++){
        for(let x=0; x<img.width; x++){
            let c = color(random(255),random(255),random(255));
            img.set(x,y,c);
        }
    }


img.updatePixels();
noSmooth();
image(img,0,0,width,height);


fill(0,0,0,random(150,260));
textSize(random(700,800));
textFont(myFont);
text('B',random(260,270),random(700,710));

}

