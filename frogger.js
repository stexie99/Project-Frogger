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
                    this.y -= hop; 
                    this.drawFrog();
                    this.pressed=true; 
                }
            }
          })
          //when a key is pressed, the frog is redrawn at a new location
          document.addEventListener('keydown', (e)=> {
            if (e.key === 'ArrowDown') {
                if(this.pressed=== false){
                    this.y += hop; 
                    this.drawFrog();
                    this.pressed=true;}
            }
          })
          
          document.addEventListener('keydown', (e)=> {
              if (e.key === 'ArrowLeft') {
                if(this.pressed=== false){
                    this.x -= hop; 
                    this.drawFrog();
                    this.pressed=true;} 
              }
          })
          document.addEventListener('keydown', (e)=> {
              if (e.key === 'ArrowRight') {
                if(this.pressed=== false){
                    this.x += hop; 
                    this.drawFrog();
                    this.pressed=true;
                } 
              }
          })
          document.addEventListener('keyup', (e)=>{
                this.pressed = false;
          })
    }
    //moved move function inside Frogger.js for better organization and visability
    drawFrog(){
        //ctx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
        ctx.fillStyle = 'green';
        // ctx.fillRect(this.x, this.y, this.width, this.height); 
        ctx.drawImage(frog, 0, 16, 56, 56, this.x, this.y, this.width, this.height )
    }
}
const frog = new Image()
frog.src='assets/sprite.png'

const frogger = new Frogger(375, 700, 50, 50)
// frogger.drawFrog()