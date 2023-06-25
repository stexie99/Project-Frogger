let score = 0
let lives= 5
let speed = 1
let hop = 50 
let time = 30
let onLog= false
const gameCanvas = document.getElementById('game');
const ctx = gameCanvas.getContext('2d');
const startButton = document.getElementById('startButton');
startButton.addEventListener('click', startGame);
//declare global variables


function win(){
    if(frogger.y <=0){
        frogger.newLife()
        score+=1
        speed = speed*1.25
        console.log(speed)
        logArray=[]
        carArray=[]
        createCar()
        createLog()
    }
}
// when player makes it past the top of the canvas they score
//car and log arrays are cleared, and new cars and logs are drawn with faster speed 

function water(){
    if(frogger.y>135&&frogger.y<340&&onLog===false){
        lives-=1
        frogger.newLife()
    }
}
//when in water and not on log, player loses a life and resets

function logMousePosition(event) {
    const x = event.clientX;
    const y = event.clientY;
    console.log(`Mouse position: x=${x}, y=${y}`);
  }

  document.addEventListener('click', logMousePosition);
// console log the location of my mouse click to help me determine the pixels


class Frogger{
    constructor(x, y, width, height){
        this.startX=x
        this.startY=y
        this.x= x
        this.y= y
        this.width= width
        this.height= height
        this.pressed= false
    }
    move(){
        document.addEventListener('keydown', (e)=> {
            if (e.key === 'ArrowUp') {
                if(this.pressed=== false){
                    this.y -= hop
                    this.pressed=true
                    onLog=false
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
                    onLog=false
                }
            }
          })
          
          document.addEventListener('keydown', (e)=> {
              if (e.key === 'ArrowLeft') {
                if(this.pressed=== false && this.x > 0){
                    this.x -= hop
                    this.pressed=true
                    onLog=false
                } 
              }
          })
          document.addEventListener('keydown', (e)=> {
              if (e.key === 'ArrowRight') {
                if(this.pressed=== false && this.x < gameCanvas.width-this.width){
                    this.x += hop
                    this.pressed=true
                    onLog=false
                } 
              }
          })
          document.addEventListener('keyup', ()=>{
                this.pressed = false

          })
    }
    //moved move function inside Frogger.js for better organization and visability
    drawFrog(){
        const g = ctx.fillStyle
        ctx.fillStyle = 'green'
        ctx.fillRect(this.x, this.y, this.width, this.height)
        ctx.drawImage(frog, 3, 25, 50, 45, this.x, this.y, this.width, this.height )
        ctx.fillStyle= g
    }
    newLife(){
        this.x=this.startX
        this.y=this.startY
    }
}

const frog = new Image()
frog.src='assets/sprite.png'
const frogger = new Frogger(375, 700, 50, 50)

function startGame() {
    score= 0
    lives=5
    speed=1
    carArray=[]
    logArray=[]
    createLog()
    createCar()
    animate()
    startButton.style.display = 'none'
    console.log('game started!')
}
    


class Car{
    constructor(x, y, speed, width, height){
        this.x=x
        this.y=y
        this.speed = speed
        this.width= width
        this.height = height

    }
    draw(){
        const r = ctx.fillStyle
        ctx.fillStyle='red'
        ctx.fillRect(this.x, this.y, this.width, this.height)
        ctx.drawImage(car, 12, 482, 130, 70, this.x, this.y, this.width, this.height)
        ctx.fillStyle=r
    }
    update(){
        this.x += this.speed
        this.hit()
        if(this.speed>0){
            if(this.x>gameCanvas.width+this.width){
            this.x=0-this.width
        }}else if(this.speed<0){
            if(this.x<0-this.width){
                this.x=gameCanvas.width
            }
        }
    }
    //moves cars back on the canvas from the opposite side
    hit(){
        if(this.x<=frogger.x&& frogger.x<=this.x+this.width&&this.y+this.height>=frogger.y&& frogger.y>=this.y){
            const deathX= frogger.x
            const deathY= frogger.y
            ctx.drawImage(dead, 300, 320, 50, 50, deathX, deathY, frogger.width, frogger.height)
            frogger.newLife()
            lives -=1
        }
    }
    
}
let carArray=[]
function createCar(){
    carArray.push(new Car(0, 560, speed, 200, 100))
    carArray.push(new Car(500,560, speed, 200, 100))
    carArray.push(new Car(0, 460, speed*-1, 200, 100))
    carArray.push(new Car(500, 460, speed*-1, 200, 100))
    carArray.push(new Car(0, 360, speed*1.5, 200, 100))
    carArray.push(new Car(500, 360, speed*1.5, 200, 100))
}

function drawCar(){
    for(let i=0; i<carArray.length; i++){
        carArray[i].draw()
        carArray[i].update()
    }
}
const car= new Image()
car.src='assets/sprite.png'
const dead = new Image()
dead.src='assets/sprite.png'




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
        ctx.drawImage(log, 385, 256, 190, 70, this.x, this.y, this.width, this.height)
        ctx.fillStyle = b
    }
    update(){
        this.land()
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
    land(){
        if(frogger.x>0&&frogger.x<gameCanvas.width-frogger.width&&this.x<=frogger.x&& frogger.x<=this.x+this.width&&this.y+this.height>=frogger.y&& frogger.y>=this.y){
            onLog= true
            frogger.x+=this.speed
        }
    }
}
const log = new Image()
log.src='assets/sprite.png'

let logArray=[]
function createLog(){
    logArray.push(new Log(0, 240, speed, 250, 98))
    logArray.push(new Log(400, 240, speed, 250, 98))
    logArray.push(new Log(0, 135, -1.5*speed, 250, 105))
    logArray.push(new Log(400, 135, -1.5*speed, 250, 105))
}

function drawLog(){
    for(let i=0; i<logArray.length; i++){
        logArray[i].draw()
        logArray[i].update()
    }
}

function scoreBoard(){
    ctx.fillStyle='black'
    ctx.font='bold 15px Times New Roman'
    ctx.fillText('score 5 points to win!', 550, 100)
    ctx.fillText('score',375, 15)
    ctx.fillText('Lives', 25, 15)
    ctx.font='bold 60px Times New Roman'
    ctx.fillText(score, 375, 65)
    ctx.fillText(lives, 25, 65)
}
function winGame(){
    ctx.clearRect(0, 0, gameCanvas.width, gameCanvas.height)
    ctx.fillStyle='orange'
    ctx.font='bold 50px Times New Roman'
    ctx.fillText('GAME OVER', 250, 190)
    ctx.fillText('YOU WIN', 290, 300)
    restart()
}
function lose(){
    ctx.clearRect(0, 0, gameCanvas.width, gameCanvas.height)
    ctx.fillStyle='orange'
    ctx.font='bold 50px Times New Roman'
    ctx.fillText('GAME OVER', 250, 190)
    ctx.fillText('You scored '+ score +' points', 180, 300)
    restart()
}
function restart(){
    let button=document.querySelector('#startButton')
    button.innerHTML='Restart'
    button.style.display = 'block'
    button.addEventListener('click', startGame)
}

function animate() {
    if(lives>=0&&score<5){
        ctx.clearRect(0, 0, gameCanvas.width, gameCanvas.height)
        win()
        drawCar()
        drawLog()
        frogger.drawFrog()
        water()
        scoreBoard()
        frogger.move()
        requestAnimationFrame(animate)
    }else if(lives<=0) {
        lose()
    }else if(score==5){
        winGame()
    } 
}
