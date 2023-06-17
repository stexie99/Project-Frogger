// class Log{
//     constructor(x, y, speed, width, height){
//         this.x=x;
//         this.y=y;
//         this.speed = speed;
//         this.width= width;
//         this.height = height;
//     }
//     draw(){
//         ctx.fillStyle='blue'
//         ctx.fillRect(this.x, this.y, this.width, this.height)
//     }
//     update(){
//         this.x += this.speed
//         if(this.speed>0){
//             if(this.x>gameCanvas.width+this.width){
//             this.x=0-this.width
//         }}else if(this.speed<0){
//             if(this.x<0-this.width){
//                 this.x=gameCanvas.width
//                 //console.log('hi')
//             }
//         }
//     }
// }
// const logArray=[]
// function createLog(){
//     logArray.push(new Log(0, 300, 2, 200, 50))
// }
// createLog()
// function drawLog(){
//     for(let i=0; i<logArray.length; i++){
//         logArray[i].draw()
//         logArray[i].update()
//     }
// }