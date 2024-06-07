let currentPosition = 0;
const step = 320; // Adjust step size as needed

function buttonClicked() {
  const container = document.getElementById('container');
  currentPosition -= step;
  container.style.left = currentPosition + 'px';
}

function buttonClicked2() {
  const container = document.getElementById('container');
  currentPosition += step;
  container.style.left = currentPosition + 'px';
} 
function buttonClicked() {
    console.log("Left button clicked");
    // Rest of your code
  }
  
  function buttonClicked2() {
    console.log("Right button clicked");
    // Rest of your code
  }
  
