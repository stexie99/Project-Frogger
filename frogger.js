let score = 0
let lives= 3
let speed = 1
let hop = 50 
direction = null
let time = 30
const gameCanvas = document.getElementById('game');
const ctx = gameCanvas.getContext('2d');
function start(){}

//declare global variables

class Frogger{
    constructor(x, y, width, height){
        this.x= x;
        this.y= y;
        this.width= width;
        this.height= height;
        this.pressed= false;
    }
    move(){
        document.addEventListener('keydown', (e)=> {
            if (e.key === 'ArrowUp') {
                if(this.pressed=== false){
                    this.y -= hop
                    this.pressed=true
                }
            }
          })
          //when a key is pressed, the frog is redrawn at a new location
          document.addEventListener('keydown', (e)=> {
            if (e.key === 'ArrowDown') {
                // keeps frog from going out of the canvas
                if(this.pressed=== false && this.y< gameCanvas.height-this.height){
                    this.y += hop 
                    this.pressed=true
                }
            }
          })
          
          document.addEventListener('keydown', (e)=> {
              if (e.key === 'ArrowLeft') {
                if(this.pressed=== false && this.x > 0){
                    this.x -= hop
                    this.pressed=true
                } 
              }
          })
          document.addEventListener('keydown', (e)=> {
              if (e.key === 'ArrowRight') {
                if(this.pressed=== false && this.x < gameCanvas.width-this.width){
                    this.x += hop
                    this.pressed=true
                } 
              }
          })
          document.addEventListener('keyup', (e)=>{
                this.pressed = false

          })
    }
    //moved move function inside Frogger.js for better organization and visability
    drawFrog(){
        //ctx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
        const g = ctx.fillStyle
        // ctx.fillStyle = 'green'
        // ctx.fillRect(this.x, this.y, this.width, this.height)
        ctx.drawImage(frog, 3, 30, 50, 50, this.x, this.y, this.width, this.height )
        ctx.fillStyle= g
    }
}

const frog = new Image()
frog.src='assets/sprite.png'
const frogger = new Frogger(375, 700, 50, 50)

class Obstacle{
    constructor(x, y, speed, width, height){
        this.x=x
        this.y=y
        this.speed = speed
        this.width= width
        this.height = height

    }
    draw(){
        const r = ctx.fillStyle
        // ctx.fillStyle='red'
        // ctx.fillRect(this.x, this.y, this.width, this.height)
        ctx.drawImage(car, 8, 485, 140, 70, this.x, this.y, this.width, this.height)
        ctx.fillStyle=r
    }
    update(){
        this.x += this.speed
        if(this.speed>0){
            if(this.x>gameCanvas.width+this.width){
            this.x=0-this.width
        }}else if(this.speed<0){
            if(this.x<0-this.width){
                this.x=gameCanvas.width
            }
        }
    }
    //moves obstacles back on the canvas from the opposite side
    hit(){
        if(this.x<=frogger.x&& frogger.x<=this.x+this.width&&this.y-this.height<=frogger.y&& frogger.y<=this.y){
            console.log('hit')
        }
    }
    
}
const obstacleArray=[]
function createObstacle(){
    obstacleArray.push(new Obstacle(0, 575, 1, 200, 75))
    obstacleArray.push(new Obstacle(500,575, 1, 200, 75))
    obstacleArray.push(new Obstacle(0, 475, -1, 200, 75 ))
    obstacleArray.push(new Obstacle(500, 475, -1, 200, 75))
    obstacleArray.push(new Obstacle(0, 365, 2.5, 200, 75))
    obstacleArray.push(new Obstacle(500, 365, 2.5, 200, 75))
}
createObstacle()
function drawObstacle(){
    for(let i=0; i<obstacleArray.length; i++){
        obstacleArray[i].draw()
        obstacleArray[i].update()
    }
}
const car= new Image()
car.src='assets/sprite.png'





class Log{
    constructor(x, y, speed, width, height){
        this.x=x
        this.y=y
        this.speed = speed
        this.width= width
        this.height = height
    }
    draw(){
        const b = ctx.fillStyle
        ctx.fillStyle='blue'
        ctx.fillRect(this.x, this.y, this.width, this.height)
        ctx.fillStyle = b
    }
    update(){
        this.x += this.speed
        if(this.speed>0){
            if(this.x>gameCanvas.width+this.width){
            this.x=0-this.width
        }}else if(this.speed<0){
            if(this.x<0-this.width){
                this.x=gameCanvas.width
            }
        }
    }
    hit(){
        if(this.x<=frogger.x&& frogger.x<=this.x+this.width&&this.y-this.height<=frogger.y&& frogger.y<=this.y){
            console.log('hit')
        }
    }
}
const logArray=[]
function createLog(){
    logArray.push(new Log(0, 250, 2, 200, 75))
}
createLog()
function drawLog(){
    for(let i=0; i<logArray.length; i++){
        logArray[i].draw()
        logArray[i].update()
    }
}
function hit() {
    for (let i = 0; i < obstacleArray.length; i++) {
      obstacleArray[i].hit()
    }
  }
function animate() {
    ctx.clearRect(0, 0, gameCanvas.width, gameCanvas.height)
    frogger.drawFrog()
    drawObstacle()
    drawLog()
    hit()
    frogger.move()
    requestAnimationFrame(animate)
    
}
animate()
