let numSquares = 6;
let colors = [];
let pickedColor;
const squares = document.querySelectorAll(".buttons");
let colorDisplay = document.querySelector("#rgbVal");
let messageDisplay = document.querySelector("#message");
const div1 = document.querySelector("#div1");
const resetButton = document.querySelector("#newColor");
let modeButtons = document.querySelectorAll(".mode");

init();

function init()
{
    setupModeButtons();    
    setupSquares();
    reset();
}

function setupSquares() 
{
    for (let i = 0; i < squares.length; i++) {
        //add click listeners to squares
        squares[i].addEventListener("click", function () 
        {
            //grab color of clicked squares
            let clickedColor = this.style.backgroundColor;

            //compare color to pickedColor
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                changeColors(clickedColor);
                div1.style.backgroundColor = clickedColor;
                resetButton.textContent = "Play again!";
            }
            else {
                this.style.backgroundColor = "rgb(5, 4, 4)";
                messageDisplay.textContent = "Try again";
            }
        });
    }
}

function setupModeButtons() 
{
    modeButtons[1].classList.add("buttonClicked");

    //modeButtons event listeners
    for (let i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("buttonClicked");
            modeButtons[1].classList.remove("buttonClicked");
            this.classList.add("buttonClicked");

            this === modeButtons[0] ? numSquares = 3 : numSquares = 6;

            console.log(numSquares);

            reset();
        });
    }
}

function reset()
{
    //generate numSquares random colors
    colors = generateRandomColors(numSquares);

    //pick a new random color from array
    pickedColor = pickColor();

    //change colorDisplay to match pickedColor
    colorDisplay.textContent = pickedColor;

    //change colors of squares
    for (let i = 0; i < squares.length; i++)
    {
        if (colors[i])
        {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
        else
        {
            squares[i].style.display = "none";
        }
    }

    //change color of div1 back to original
    div1.style.backgroundColor =  "rgb(86, 131, 199)";

    resetButton.textContent = "New colors";
    messageDisplay.textContent = "";
}

resetButton.addEventListener("click", () =>
{
    reset();
});

function changeColors(color)
{
    //loop through all squares
    for (let i = 0; i < squares.length; i++)
    {
        //change each color to match given color
        squares[i].style.backgroundColor = color;
    }    
}

function pickColor()
{
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num)
{
    //make an array
    let arr = [];

    //repeat num times
    for (let i = 0; i < num; i++)
    {
        //get random color and push into arr
        arr.push(randomColor());
    }
    //return that array
    return arr;
}

function randomColor()
{
    //pick a "red" from 0 - 255
    let r = Math.floor(Math.random() * 256);

    //pick a "green" from 0 - 255
    let g = Math.floor(Math.random() * 256);

    //pick a "blue" from 0 - 255
    let b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}