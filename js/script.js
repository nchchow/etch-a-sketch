// html references
const container = document.querySelector("#container");
const resetbtn = document.querySelector("#reset");

createGrid(16); // initial grid layout

// create n x n square divs
function createGrid(n) {
    for (var i = 0; i < n * n; ++i) {
        const square = document.createElement("div");
        square.classList.add("square");

        // modify square size
        let squareWidth = 460 / n;
        square.style.width = squareWidth + "px";
        square.style.height = squareWidth + "px";

        square.addEventListener("mouseover", (e) => {
            square.style.backgroundColor = "black";
        });
        container.style.gridTemplateColumns = "repeat(" + n + ", " + square.style.width + ")";
        container.appendChild(square);
    }
}

// reset button resets all squares to white
resetbtn.addEventListener("click", (e) => {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        container.removeChild(square);
    });
    let n = promptInput();
    createGrid(n);
});

// prompts for input, returns 16 if invalid entry
function promptInput() {
    var number = prompt("Enter a number to determine the size of the next grid");
    if(parseInt(number)) {
        return number;
    } else {
        return 16;
    }
}