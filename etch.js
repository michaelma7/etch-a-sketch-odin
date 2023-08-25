//creating intial 16x16 grid
for (i=1; i<257; i++){
    let division = document.createElement('div');
    division.setAttribute("class", "cell");

    let container = document.getElementById('pad');
    container.appendChild(division);
}

//event listeners for hover effect
let divs = document.querySelectorAll(".cell");
divs.forEach(div => div.addEventListener("mouseover", changeColor));
divs.forEach(div => div.addEventListener("mouseout",  removeColor)); 

//button event listener
let btn = document.querySelector("button");
btn.addEventListener("click", changeGrid);

function randomInteger(max) {
    return Math.floor(Math.random() * (max + 1));
}

function changeColor(e) {
    //generate random color
    let r = randomInteger(255);
    let g = randomInteger(255);
    let b = randomInteger(255);
    let div = e.target;
    div.setAttribute('style', `background-color: rgb(${r}, ${g}, ${b})`);
}

function removeColor(e) {
    let div  = e.target;
    div.setAttribute('style', 'background-color: white');
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
            division.setAttribute("class", "cell");            

            sketch.appendChild(division);
        }

        sketch.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
        sketch.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

        let divs = document.querySelectorAll(".cell");
        divs.forEach(div => div.addEventListener("mouseover", changeColor));
        divs.forEach(div => div.addEventListener("mouseout",  removeColor)); 
    }
    else {
        return alert("Not a valid number.")
    }
}


