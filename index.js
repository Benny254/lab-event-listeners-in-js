// Handle Button Clicks

// Function to change the background color when a button is clicked
function changeBackgroundColor() {
  // Implement the function to change background color
 const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)

  const color = `rgb(${r}, ${g}, ${b})`

  document.body.style.backgroundColor = color

  return color
}
// Function to reset the background color when the body is double-clicked
function resetBackgroundColor() {
  // Implement the function to reset background color
  document.body.style.backgroundColor = ''
}

// Capture Keyboard Input

// Function to display the key pressed by the user
function displayKeyPress(event) {
  // Implement the function to display key pressed
  const keyPressed = event.key
  const displayElement = document.getElementById('keyPressDisplay')
  displayElement.textContent = `Key pressed: ${keyPressed}`
}

// Process Text Input

// Function to display user input in real-time
function displayUserInput(event) {
  const displayElement = document.getElementById('userInputDisplay')

  // ✅ prevent crash in tests
  if (!displayElement) return

  let value = ''

  if (event && event.target) {
    value = event.target.value
  } else {
    const input = document.getElementById('textInput')
    if (input) value = input.value
  }

  displayElement.textContent = `You typed: ${value}`
}

// Attach Event Listeners
function setupEventListeners() {
// Attach event listener to change background color when the button is clicked
  document
    .getElementById('changeColorButton')
    .addEventListener('click', changeBackgroundColor)

  // Attach event listener to reset background color when the body is double-clicked
  document
    .getElementById('resetColorButton')
    .addEventListener('dblclick', resetBackgroundColor)

  // Attach event listener to display key pressed when a key is pressed down
  document.addEventListener('keydown', displayKeyPress)

  // Attach event listener to display user input in real-time as they type
  document.getElementById('textInput').addEventListener('input', displayUserInput)
}

// Initialize event listeners when the DOM is loaded
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', setupEventListeners)
}

module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
}