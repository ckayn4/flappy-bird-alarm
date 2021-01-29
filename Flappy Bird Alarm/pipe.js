class Pipe {
  constructor(){
    this.bottom = random(height/2);
    this.top = (height - this.bottom) - 150;
    this.x = width;
    this.w = 50;
    this.speed = 2;
    this.highlight = false;
    this.isPassed = false;
  }

  show(){
    fill(34, 179, 27);
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
    if (bird.y < (this.top + 20) || bird.y > ((height - this.bottom) - 20)){
      if (bird.x > this.x - 20 && bird.x < this.x + this.w + 10){
        this.highlight = true;
        return true;
      }
      
    }
    if ((bird.x > this.x+this.w) && (this.highlight == false) && (this.isPassed == false)){
      score++;
      this.isPassed = true
    }
    return false;
  }
 
  }



