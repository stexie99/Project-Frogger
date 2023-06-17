class Frogger{
    constructor(x, y, width, height){
        this.x= x;
        this.y= y;
        this.width= width;
        this.height= height;
    }
    move(){
        document.addEventListener('keydown', (e)=> {
            if (e.key === 'ArrowUp') {
              this.y -= hop; 
              this.drawFrog(); 
              console.log('up')
            }
          })
          //when a key is pressed, the frog is redrawn at a new location
          document.addEventListener('keydown', (e)=> {
            if (e.key === 'ArrowDown') {
              this.y += hop; 
              this.drawFrog(); 
            }
          })
          
          document.addEventListener('keydown', (e)=> {
              if (e.key === 'ArrowLeft') {
                this.x -= hop; 
                this.drawFrog(); 
              }
          })
          
          document.addEventListener('keydown', (e)=> {
              if (e.key === 'ArrowRight') {
                this.x += hop; 
                this.drawFrog(); 
              }
          })
    }
    //moved move function inside Frogger.js for better organization and visability
    drawFrog(){
        //ctx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x, this.y, this.width, this.height); 
    }
}

const frogger = new Frogger(375, 730, 50, 50)
// frogger.drawFrog()