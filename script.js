


const gameCanvas = document.getElementById('game');
const frog = gameCanvas.getContext('2d');
let x = 100;
let y = 120;

function drawFrog() {
  frog.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
  frog.fillStyle = 'green';
  frog.fillRect(x, y, 25, 25);
}
//temp frog placeholder
drawFrog();
document.addEventListener('keydown', function(e) {
  if (e.key === 'ArrowUp') {
    y -= 10; 
    drawFrog(); 
  }
})
//when a key is pressed, the frog is redrawn at a new location
document.addEventListener('keydown', function(e) {
  if (e.key === 'ArrowDown') {
    y += 10; 
    drawFrog(); 
  }
})

document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
      x -= 10; 
      drawFrog(); 
    }
})

document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowRight') {
      x += 10; 
      drawFrog(); 
    }
})

