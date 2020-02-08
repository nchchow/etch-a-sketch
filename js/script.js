// html references
const container = document.querySelector("#container");
const resetbtn = document.querySelector("#reset");

// create 16x16 square divs
for(var i = 0; i < 16*16; ++i) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.addEventListener("mouseover", (e) => {
        square.style.backgroundColor = "black";
    });
    container.appendChild(square);
}

resetbtn.addEventListener("click", (e) => {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.style.backgroundColor = "white";
    });
});
