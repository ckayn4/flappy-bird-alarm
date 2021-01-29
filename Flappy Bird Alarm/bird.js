class Bird{
  constructor(){
    this.y = height/2;
    this.x = 64;
    this.gravity = 0.6;
    this.velocity = 0;
    this.lift = -15;
    this.radius = 60;
  } 
  showSelf(){
    fill(255, 234, 5);
    ellipse(this.x, this.y, this.radius);
    this.image = image(birdImage, this.x-55, this.y-75, this.x +55, 145);
  }

  update(){
    this.velocity += this.gravity; 
    //air resistence or something
    this.velocity *= .9;
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