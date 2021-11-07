var colour = "black";
var size = 16;
createBoard(size);
const divs = document.querySelector('#container');
divs.addEventListener('mouseover', (div) => {
mouseOver(div.target.id);
});

const button = document.querySelector('#reset');
button.addEventListener('click', () => {
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
    document.getElementById(ID).style.backgroundColor = colour;
  }

function resetBoard() {
    var divs = document.querySelectorAll(".div-");
    var length = divs.length;
    for (let i = 0; i < length; i++) {
        divs[i].style.removeProperty("background-color");
    }
    size = window.prompt("What size grid would you like?", "16")
    createBoard(size);
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}