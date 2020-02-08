// html references
const container = document.querySelector("#container");

// create 16x16 square divs
for(var i = 0; i < 16*16; ++i) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.addEventListener("mouseover", (e) => {
        square.style.backgroundColor = "black";
    })
    container.appendChild(square);
}

