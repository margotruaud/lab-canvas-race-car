function random(from, to) {
  // TODO
  return Math.random()*(to-from)+from;
}

class Obstacle {
  constructor() {
  this.w= random(100,W-100);
  this.x= random(0,W - this.w);
  this.h=100;
  this.y=0;
  }

  draw() {
    ctx.beginPath();
    ctx.fillStyle="brown";
    ctx.fillRect(this.x,this.y,this.w,this.h);
    ctx.closePath();
  }

  hits(car) {
    if ( (((this.x<car.x)&&(this.x+this.w>car.x))||
    ((this.x<car.x+car.w)&&(this.x +this.w>car.x+car.w)))
    && (((this.y+100)>car.y)&&((this.y+100)<car.y+car.h)) ){
      gameover=true;
    }
    }
}