let numSquares = 6;
let colors = generateRandomColors(numSquares);
const squares = document.querySelectorAll(".buttons");
let pickedColor = pickColor();
let colorDisplay = document.querySelector("#rgbVal");
let messageDisplay = document.querySelector("#message");
const div1 = document.querySelector("#div1");
const resetButton = document.querySelector("#newColor");
const easy = document.querySelector("#easy");
const hard = document.querySelector("#hard");

hard.classList.add("buttonClicked");

easy.addEventListener("click", () =>
{
    //make the button appear selected
    easy.classList.add("buttonClicked");
    hard.classList.remove("buttonClicked");

    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    //only 3 squares must appear
    for (let i = 0; i < squares.length; i++)
    {
        if (colors[i])
        {
            squares[i].style.backgroundColor = colors[i];
        }
        else
        {
            squares[i].style.display = "none";
        }
    }
});
hard.addEventListener("click", () =>
{
    //make the button appear selected
    hard.classList.add("buttonClicked");
    easy.classList.remove("buttonClicked");

    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    //all 6 squares must appear
    for (let i = 0; i < squares.length; i++)
    {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
});

resetButton.addEventListener("click", () =>
{
    //generate all new colors
    colors = generateRandomColors(numSquares);

    //pick a new random color from array
    pickedColor = pickColor();

    //change colorDisplay to match pickedColor
    colorDisplay.textContent = pickedColor;

    //change colors of squares
    for (let i = 0; i < squares.length; i++)
    {
        squares[i].style.backgroundColor = colors[i];
    }

    //change color of div1 back to original
    div1.style.backgroundColor =  "rgb(86, 131, 199)";

    resetButton.textContent = "New colors";
    messageDisplay.textContent = "";
})

colorDisplay.textContent = pickedColor;

for (let i = 0; i < squares.length; i++)
{
    //set initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    //add click listeners to squares
    squares[i].addEventListener("click", function()
    {
        //grab color of clicked squares
        let clickedColor = this.style.backgroundColor;

        //compare color to pickedColor
        if (clickedColor === pickedColor)
        {
            messageDisplay.textContent = "Correct!";
            changeColors(clickedColor);
            div1.style.backgroundColor = clickedColor;
            resetButton.textContent = "Play again!"
        }
        else
        {
            this.style.backgroundColor = "rgb(5, 4, 4)";
            messageDisplay.textContent = "Try again";
        }
    });
}

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