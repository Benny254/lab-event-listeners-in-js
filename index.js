
//HANDLE BUTTON CLICKS

function changeBackgroundColor() {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)

  const color = `rgb(${r}, ${g}, ${b})`

  document.body.style.backgroundColor = color

  return color
}

//RESET BACKGROUND COLOR
function resetBackgroundColor() {
    document.body.style.backgroundColor = "";
}

//CAPTURE KEYBOARD INPUT
function displayKeyPress(event) {
    const keyPressDisplay = document.getElementById("keyPressDisplay");
    keyPressDisplay.textContent = `Key pressed: ${event.key}`;
}

//PROCESS TEXT INPUT
//Create a function, displayUserInput(), 
function displayUserInput(event) {
  const textInput = document.getElementById('textInput')
  const userInputDisplay = document.getElementById('textInputDisplay')
  id = 'textInputDisplay'

  // Ensure the elements exist before trying to access their properties
  if (!textInput || !userInputDisplay) return

  const value = event?.target?.value ?? textInput.value ?? ''

  userInputDisplay.textContent = `You typed: ${value}`
}
//COMBINE MULTIPLE EVENTS
function setupEventListeners() {
    const changeColorButton = document.getElementById("changeColorButton");
    const resetColorButton = document.getElementById("resetColorButton");
    const textInput = document.getElementById("textInput");

    changeColorButton.addEventListener("click", changeBackgroundColor);
    resetColorButton.addEventListener("dblclick", resetBackgroundColor);
    document.addEventListener("keydown", displayKeyPress);
    textInput.addEventListener("input", displayUserInput);
}

// Initialize event listeners when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", setupEventListeners);

// Export functions for testing
module.exports = {
    changeBackgroundColor,
    resetBackgroundColor,
    displayKeyPress,
    displayUserInput,
    setupEventListeners,
};