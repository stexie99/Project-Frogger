class Obstacle{
    constructor(x, y, speed, width, height){
        this.x=x;
        this.y=y;
        this.speed = speed;
        this.width= width;
        this.height = height;

    }
    draw(){
        
        ctx.fillStyle='red'
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
    update(){
        this.x += this.speed
        this.draw()
        
    }
}
let obstacle = new Obstacle(100, 100, 1, 100, 100)

function animate() {
    ctx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
    frogger.drawFrog()
    frogger.move()
    obstacle.update()
    requestAnimationFrame(animate);
}

  
animate();
  