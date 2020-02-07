// html references
const container = document.querySelector("#container");

// create 16x16 square divs
for(var i = 0; i < 16*16; ++i) {
    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
}