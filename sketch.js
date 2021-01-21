var canvas;
var music;
var s1, s2, s3, s4;
var b;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(400,400);

    s1 = createSprite(30, 380, 100, 20);
    s1.shapeColor = "Cyan" ;

    s2 = createSprite(140, 380, 100, 20);
    s2.shapeColor = "Orange";

	s3 = createSprite(250, 380, 100, 20);
    s3.shapeColor = "Blue";

    s4 = createSprite(360, 380, 100, 20);
    s4.shapeColor = "Magenta";

    b = createSprite(200, 200, 20, 20);
    b.shapeColor = "White"

    edges = createEdgeSprites();

}

function draw() {
    background(0);
    
    
    b.bounceOff(edges[0])
    b.bounceOff(edges[1])
    b.bounceOff(edges[2])

    if(keyDown("Space")){
       
       b.velocityX = Math.round(random(3, 5))
       b.velocityY = Math.round(random(3, 5))
       b.x = Math.round(random(100, 300))
       b.y = Math.round(random(100, 300))
    }

    if(s1.isTouching(b)){
        b.shapeColor = "Cyan"
        b.velocityY = 0;
        b.velocityX = 0;
        music.stop();
    }

    if(s2.isTouching(b) && b.bounceOff(s2)){
        b.shapeColor = "Orange"
    }

    if(s3.isTouching(b) && b.bounceOff(s3)){
        b.shapeColor = "Blue"
    }

    if(s4.isTouching(b) && b.bounceOff(s4)){
        b.shapeColor = "Magenta"
        music.play();
    }


drawSprites();
    
}
