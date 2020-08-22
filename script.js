const container = document.querySelector("#container");
const newGridButton = document.querySelector("#newGrid");

let gridLength = 16;
let amountOfSquares = 0;
let squareLength = 0;

createNewGrid();

newGridButton.addEventListener("click", resetGrid);

function createNewGrid () {

    calculateGridValues();

    for(let i = 0; i <= amountOfSquares -1 ; i++){

        const square = createOneSquare();
    
        square.addEventListener("mouseover", changeColor)
        
        container.appendChild(square);

    }
}

function calculateGridValues () {

    amountOfSquares = gridLength * gridLength;
    squareLength = 800 / gridLength;

}

function createOneSquare() {

    const div = document.createElement("div");

    div.style.width = `${squareLength}px`;
    div.style.height = `${squareLength}px`;

    return div;

}

function changeColor (event) {

    event.target.style.backgroundColor = "black";
    
}

function resetGrid () {

    gridLength = prompt("How many Squares per side?");    
    removeCurrentGrid();
    createNewGrid();

}

function removeCurrentGrid () {

    for(let i = 0; i <= amountOfSquares -1; i++){

        container.removeChild(container.childNodes[0]);    

    }
}


