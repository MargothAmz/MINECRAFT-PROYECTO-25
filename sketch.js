var playerPaddle, computerPaddle, ball, edges
var paddle1, paddle2, ballImage
var edges;

function preload(){
    // Agregar el nombre de la imagen después de loadImage dentro de ("")
    paddle1=loadImage(" ")
    paddle2=loadImage(" ")
    ballImage=loadImage(" ")
}

function setup(){
  playerPaddle = createSprite(390, 200, 10, 70);
  computerPaddle = createSprite(10, 200, 10, 70);
  ball = createSprite(200,200,10,10);
  
    // Agregar los nombres de la imagen adecuados dentro de las comillas dobles
  playerPaddle.addImage("",paddle1);
  playerPaddle.scale=0.4;
  computerPaddle.addImage("",paddle2);
  computerPaddle.scale=0.4;
  ball.addImage("", ballImage);
  ball.scale=0.4;

// Agregar velocityX y velocityY debajo
    
    
    
    edges=createEdgeSprites();
    
    
}

function draw(){
  background("white");
// Agregar el número adecuado del borde dentro de (edges[ ]) para que la pelota rebote
    
  ball.bounceOff(edges[]);
  ball.bounceOff(edges[]);
  ball.bounceOff(edges[]);
  ball.bounceOff(edges[]);
    
  drawSprites();
}
