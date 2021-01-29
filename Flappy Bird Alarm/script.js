let bird;
let pipes = [];
let time, hour, minute, second, hour2, minute2, second2, alarmOnce, 
hour2 = prompt("Hour: ")
minute2 = prompt("Minutes: ");
second2 = prompt("Seconds: ")




time = 0
function setup(){
  console.log("In Setup");
createCanvas(600, 600);
background(220)
console.log("Leaving Setup");
  bird = new Bird();
alarmOnce = false

}
function drawAlarm(){
 [hour, minute, second] = ( new Date() ).toLocaleTimeString().slice(0,8).split(":")
textAlign(CENTER, CENTER);
textSize(25);
text(`Current Time - ${hour} : ${minute} : ${second}`, width / 2, height / 2);
text(`Alarm Set - ${hour2}:${minute2}:${second2}`, width / 2, height / 4);

}



function gameStart(){
console.log("Anything")
background(0);
      bird.update();
      bird.showSelf();

        if (frameCount % 100 == 0){
          pipes.push(new Pipe());
        }

        for (let i = pipes.length-1; i >= 0; i--){
          pipes[i].show();
          pipes[i].update();

          if (pipes[i].hits(bird)){
            console.log("HIT");
          }

          if (pipes[i].offscreen()){
            pipes.slice(i,1);
          }
 }
 alarmOnce == true
}




// if ((hour >= hour2) && ((minute >= minute2) || minute >= 0) && (second >= second2 || second > 0)){
//   startGame()
// }



function draw(){
      background(220);
  drawAlarm();
  // background(220);
  // drawAlarm();
if ((hour == hour2) && (minute == minute2)  && (second == second2) && (alarmOnce == false)){
gameStart()
}



// console.log("Anything")
// background(0);
//       bird.update();
//       bird.showSelf();

//         if (frameCount % 100 == 0){
//           pipes.push(new Pipe());
//         }

//         for (let i = pipes.length-1; i >= 0; i--){
//           pipes[i].show();
//           pipes[i].update();

//           if (pipes[i].hits(bird)){
//             console.log("HIT");
//           }

//           if (pipes[i].offscreen()){
//             pipes.slice(i,1);
//           }
//   }
//   // alarmOnce == true
 }



function keyPressed(){
  if (key == ' '){
    bird.up();
  }
}


class Bird{
  constructor(){
    this.y = height/2;
    this.x = 64;
    this.gravity = 0.6;
    this.velocity = 0;
    this.lift = -10;
  }

  showSelf(){
    fill(255);
    ellipse(this.x, this.y, 34);
  }

  update(){
    this.velocity += this.gravity;
    //air resistence or something
    this.velocity *= 0.9;
    this.y += this.velocity;

    if (this.y > height){
      this.y = height;
      this.velocity = 0;
    }

    if (this.y < 0){
      this.y = 0;
      this.velocity = 0;
    }
  }

  up(){
    this.velocity += this.lift;
  }
}


class Pipe {
  constructor(){
    this.top = random(height/2);
    this.bottom = random(height/2);
    this.x = width;
    this.w = 20;
    this.speed = 2;
    this.highlight = false;
  }

  show(){
    fill(255);
    if (this.highlight){
      fill(255,0,0);
    }
    rect(this.x, 0, this.w, this.top);
    rect(this.x, height - this.bottom, this.w, this.bottom);
  }

  update(){
    this.x -= this.speed;
  }

  offscreen(){
    if (this.x < -this.w){
      return true;
    } else{
      return false;
    }
  }

  hits(){
    if (bird.y < this.top || bird.y > height - this.bottom){
      if (bird.x > this.x && bird.x < this.x + this.w){
        this.highlight = true;
        return true;
      }
    }
    return false;
    this.highlight = false;
  }
}