let colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
];

let squares = document.querySelectorAll(".buttons");
let pickedColor = colors[3];
let colorDisplay = document.querySelector("#rgbVal");
let messageDisplay = document.querySelector("#message");

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