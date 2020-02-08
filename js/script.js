// html references
const container = document.querySelector("#container");
const resetbtn = document.querySelector("#reset");

createGrid(16); // initial grid layout

// create 16x16 square divs
function createGrid(gridsPerSide) {
    for (var i = 0; i < gridsPerSide * gridsPerSide; ++i) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.addEventListener("mouseover", (e) => {
            square.style.backgroundColor = "black";
        });
        container.appendChild(square);
    }
}

// reset button event listener
resetbtn.addEventListener("click", (e) => {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.style.backgroundColor = "white";
    });
});
