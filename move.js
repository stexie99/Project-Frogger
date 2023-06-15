


const gameCanvas = document.getElementById('game');
const frog = gameCanvas.getContext('2d');
let x = 375;
let y = 730;

function drawFrog() {
  frog.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
  frog.fillStyle = 'green';
  frog.fillRect(x, y, 50, 50);
}
//temp frog placeholder
drawFrog();
document.addEventListener('keydown', function(e) {
  if (e.key === 'ArrowUp') {
    y -= hop; 
    drawFrog(); 
  }
})
//when a key is pressed, the frog is redrawn at a new location
document.addEventListener('keydown', function(e) {
  if (e.key === 'ArrowDown') {
    y += hop; 
    drawFrog(); 
  }
})

document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
      x -= hop; 
      drawFrog(); 
    }
})

document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowRight') {
      x += hop; 
      drawFrog(); 
    }
})

