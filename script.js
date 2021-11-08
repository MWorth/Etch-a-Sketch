var colour = "black";
var size = 16;
createBoard(size);
const divs = document.querySelector('#container');
divs.addEventListener('mouseover', (div) => {
mouseOver(div.target.id);
});
const btnBlack = document.querySelector('#black');
btnBlack.addEventListener('click', () => {
    colour = "black";
});
const btnGreyscale = document.querySelector('#greyscale');
btnGreyscale.addEventListener('click', () => {
    colour = "greyscale";
});
const btnRandom = document.querySelector('#random');
btnRandom.addEventListener('click', () => {
    colour = "random";
});
const btnReset = document.querySelector('#reset');
btnReset.addEventListener('click', () => {
    resetBoard();
});

function createBoard(boardSize) {
    var elem0 = document.querySelector('#container');
    removeAllChildNodes(elem0);
    elem0.style = "grid-template-columns: repeat(" + size + ", 1fr); grid-template-rows: repeat(" + size + ", 1fr);";
    for (let i = 0; i < (boardSize * boardSize); i++) {
        let div = document.createElement("div");
        div.id = "div-" + i;
        div.className = "div-";
//        div.innerHTML = i;
        elem0.appendChild(div);
    }
}

function mouseOver(ID) {
    if (colour == "black") {
        document.getElementById(ID).style.backgroundColor = "black";
        document.getElementById(ID).style.opacity = 1;
    } else if (colour == "greyscale") {
        let pixel = document.getElementById(ID)
        pixel.style.backgroundColor = "black";
        console.log(pixel.style.opacity);
        if (parseFloat(pixel.style.opacity)) {
            pixel.style.opacity = parseFloat(pixel.style.opacity) + 0.1;
        } else {
            pixel.style.opacity = 0.1;
            }
    } else if (colour == "random") {
        let a = Math.random() * 255;
        let b = Math.random() * 255;
        let c = Math.random() * 255;
        document.getElementById(ID).style.backgroundColor = "rgb(" + a + ", " + b + ", " + c + ")";
    } else {
        window.alert("Error - Colour set incorrectly");
    }
  }

function resetBoard() {
    var divs = document.querySelectorAll(".div-");
    var length = divs.length;
    for (let i = 0; i < length; i++) {
        divs[i].style.removeProperty("background-color");
    }
    size = window.prompt("What size grid would you like?", "16");
    if (size > 100) {
        window.prompt("What size grid would you like? (Must be under 100 x 100)", "16");
    }
    createBoard(size);
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}