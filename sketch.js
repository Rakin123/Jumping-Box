var surface1, surface2, surface3, surface4;

var canvas;
var music;
var box;
var edges;
//hi
//bye

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite(96.25,580, 192.5, 20);
    surface1.shapeColor = "lime";
    surface2 = createSprite(298.75,580,192.5,20);
    surface2.shapeColor = "cyan";
    surface3 = createSprite(501.25,580,192.5,20);
    surface3.shapeColor = "red";
    surface4 = createSprite(703.75,580,192.5,20);
    surface4.shapeColor = "pink";

    //create box sprite and give velocity
    box = createSprite(random(20,750),40,40,40);
    box.shapeColor = "white";
    box.velocityX = 5;
    box.velocityY = 8;

}

function draw() {
    background(0);
    //create edgeSprite
    edges = createEdgeSprites();
    
    box.bounceOff(edges);

    drawSprites();
text(mouseX + ","+mouseY, mouseX, mouseY);


    //add condition to check if box touching surface and make it box
    if(box.isTouching(surface1)){
        box.shapeColor = surface1.shapeColor;
        box.bounceOff(surface1);
        music.stop();
     }else if(box.isTouching(surface2)){
        box.shapeColor = surface2.shapeColor;
        box.bounceOff(surface2);
        box.velocityY = 0;
        box.velocityX = 0;
    }else if(box.isTouching(surface3)){
        box.shapeColor = surface3.shapeColor;
        box.bounceOff(surface3);
        music.play();
    }else if(box.isTouching(surface4)){
        box.shapeColor = surface4.shapeColor;
        box.bounceOff(surface4);
    }


}
