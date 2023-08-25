//creating initial 16x16 grid
for (i=1; i<257; i++){
    let division = document.createElement('div');
    division.classList.add("cell");

    let container = document.getElementById('pad');
    container.appendChild(division);
}

//event listeners for hover effect
let divs = document.querySelectorAll(".cell");
divs.forEach(div => div.addEventListener("mouseover", changeColor));
// divs.forEach(div => div.addEventListener("mouseout",  removeColor)); 

//button event listeners
let btn = document.querySelector(".resize");
btn.addEventListener("click", changeGrid);
let reset = document.querySelector(".reset");
reset.addEventListener("click", resetGrid);

function randomInteger(max) {
    return Math.floor(Math.random() * (max + 1));
}

function changeColor(e) {
    //generate random color
    let r = randomInteger(255);
    let g = randomInteger(255);
    let b = randomInteger(255);
    let div = e.target;
    div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

function removeColor(e) {
    let div  = e.target;
    div.style.backgroundColor = 'white';
}

function resetGrid() {
    let divs = document.querySelectorAll(".cell");
    divs.forEach(div => div.style.backgroundColor = "white");
}

function changeGrid() {
    let gridSize = prompt('How many rows and columns do you want? (No more than a 100)', "16");
    if (gridSize != NaN && gridSize <= 100 && gridSize > 0) {
        //delete old grid 
        let grid = document.querySelectorAll(".cell");
        grid.forEach(div => div.remove());

        //make new grid
        let total = (gridSize * gridSize) + 1;
        let sketch = document.getElementById('pad');
        for (i=1; i<total; i++){
            let division = document.createElement('div');
            division.classList.add("cell");            

            sketch.appendChild(division);
        }

        sketch.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
        sketch.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

        let divs = document.querySelectorAll(".cell");
        divs.forEach(div => div.addEventListener("mouseover", changeColor));
        // divs.forEach(div => div.addEventListener("mouseout",  removeColor)); 
    }
    else {
        return alert("Not a valid number.")
    }
}


