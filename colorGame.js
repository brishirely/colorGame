var numSquares = 6;
var colors = [];
var pickedColor;
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetBtn = document.getElementById("reset");
var modeBtns = document.querySelectorAll(".mode");

init();

function init() {
    //mode buttons event listneners
    setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons(){
    for (var i = 0; i < modeBtns.length; i++) {
     modeBtns[i].addEventListener("click", function () {
         modeBtns[0].classList.remove("selected");
         modeBtns[1].classList.remove("selected");
         this.classList.add("selected");
         //ternary operator
         this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
         reset();
     });
 }
}

function setupSquares(){ 
    for (var i = 0; i < squares.length; i++) {
        //add click listeners to squares
        squares[i].addEventListener("click", function () {
            //grab color of clicked square
            var clickedColor = this.style.background;
            //compare color to picked color
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!!!";
                changeColors(clickedColor);
                reset.textContent = "Play again?"
                h1.style.background = clickedColor;
            }
            else {
                this.style.background = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

function reset() {
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change color display to match picked color
    colorDisplay.textContent = pickedColor
    resetBtn.textContent = "New Colors";
    messageDisplay.textContent = "";
    //change colors of squares
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        }
        else {
            squares[i].style.display = "none";
        }
    }
    h1.style.background = "steelblue";
}
resetBtn.addEventListener("click", function () {
    reset();
});
colorDisplay.textContent = pickedColor;

function changeColors(color) {
    //loop through all squares and change color to given color
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    //make an array
    var arr = [];
    //add num random colors to arr **Repeat num times
    for (var i = 0; i < num; i++) {
        //get random color and push into array
        arr.push(randomColor());
    }
    //return array
    return arr;
}

function randomColor() {
    //Pick red from 0-255
    var r = Math.floor(Math.random() * 256);
    //pick green 0-255
    var g = Math.floor(Math.random() * 256);
    //pick blue 0-255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}