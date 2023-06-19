
const gameCanvas = document.getElementById('game');
const ctx = gameCanvas.getContext('2d');
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
        if(this.speed>0){
            if(this.x>gameCanvas.width+this.width){
            this.x=0-this.width
        }}else if(this.speed<0){
            if(this.x<0-this.width){
                this.x=gameCanvas.width
                //console.log('hi')
            }
        }
    }
    //moves obstacles back on the canvas from the opposite side
}
const obstacleArray=[]
function createObstacle(){
    obstacleArray.push(new Obstacle(0, 500, 1, 200, 50))
    obstacleArray.push(new Obstacle(500,500, 1, 200, 50))
    obstacleArray.push(new Obstacle(0, 450, -1, 200, 50 ))
    obstacleArray.push(new Obstacle(500, 450, -1, 200, 50 ))
    obstacleArray.push(new Obstacle(0, 400, 2.5, 200, 50 ))
    obstacleArray.push(new Obstacle(500, 400, 2.5, 200, 50 ))
}
createObstacle()
function drawObstacle(){
    for(let i=0; i<obstacleArray.length; i++){
        obstacleArray[i].draw()
        obstacleArray[i].update()
    }
}
// console.log(obstacleArray)
class Log{
    constructor(x, y, speed, width, height){
        this.x=x;
        this.y=y;
        this.speed = speed;
        this.width= width;
        this.height = height;
    }
    draw(){
        ctx.fillStyle='blue'
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
    update(){
        this.x += this.speed
        if(this.speed>0){
            if(this.x>gameCanvas.width+this.width){
            this.x=0-this.width
        }}else if(this.speed<0){
            if(this.x<0-this.width){
                this.x=gameCanvas.width
                //console.log('hi')
            }
        }
    }
    hit(){
        if(this.x==frogger.x){
            console.log('hit')
        }
    }
}
const logArray=[]
function createLog(){
    logArray.push(new Log(0, 300, 2, 200, 50))
}
createLog()
function drawLog(){
    for(let i=0; i<logArray.length; i++){
        logArray[i].draw()
        logArray[i].update()
    }
}
function callHit() {
    for (let i = 0; i < logArray.length; i++) {
      logArray[i].hit();
    }
  }
function animate() {
    ctx.clearRect(0, 0, gameCanvas.width, gameCanvas.height)
    frogger.drawFrog()
    drawObstacle()
    drawLog()
    callHit()
    frogger.move()
    requestAnimationFrame(animate)
    
}
animate();
