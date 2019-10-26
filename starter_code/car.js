class Car {
  constructor() {
    // this.img
    const img = document.createElement('img');

    img.onload = () => {
      const imgRatio = img.naturalWidth/img.naturalHeight;
      this.img = img;
      
      this.y = 1200;
      this.w = 100;
      this.h = this.w/imgRatio;
      this.x = W/2 - 50;
      this.speed = 25;
      
      
      // TODO
    }
    img.src = "images/car.png";
  }

  draw() {
    if (!this.img) return; // if `this.img` is not loaded yet => don't draw
    ctx.drawImage(this.img,this.x,this.y,this.w, this.h);
    // TODO
  }

  moveLeft() {
    this.x -=this.speed;
    if (this.x < 0){
      this.x=0;
    }
    
    // TODO
  }
  moveRight() {
    // TODO
    this.x +=this.speed;
    if (this.x > W){
      this.x = W;
    }
  }
}

