let bird;
let pipes = [];
let score;


function setup(){
  birdImage = loadImage("https://art.pixilart.com/42a23b5dc16ad9b.png");
  backgroundImage = loadImage ("https://i.imgur.com/xCmQMXk.png");
  setupAlarm();
  bird = new Bird();
  pipes.push(new Pipe());
  score = 0;
}

function drawGame(){
  background(backgroundImage);
  text(`Score: ${score}`, width/2, height/2)

  if (bird){
    bird.showSelf();
    bird.update();
  } 
  if (pipes){
        if (frameCount % 120 == 0){
          pipes.push(new Pipe());
        }

        for (let i = pipes.length-1; i >= 0; i--){
          pipes[i].show();
          pipes[i].update();
        
          if (pipes[i].hits(bird)){
          } 

          if (pipes[i].offscreen()){
            pipes.slice(i,1);
          }
        }
  }   
}


function keyPressed(){
  if (key == ' '){
    bird.up();
  }
}


