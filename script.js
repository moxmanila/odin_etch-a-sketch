//Sets important constants and variables

const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");
let button = document.getElementById("resolution")
//Initial resolution
let resolution = 16

//Creates a default grid sized 16x16 
function defaultGrid() {
    makeRows(resolution);
    makeColumns(resolution);
}

    //Takes (rows, columns) input and makes a grid
    function makeRows(rowNum) {

    //Creates rows
    for (r = 0; r < rowNum; r++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
        row.style.height = (225/rowNum)*2 +'px'
        row.style.marginBottom = '1px'
        };
    };

    //Creates columns
    function makeColumns(cellNum) {
        for (i = 0; i < rows.length; i++) {
            for (j = 0; j < cellNum; j++) {
                let newCell = document.createElement("div");
                rows[j].appendChild(newCell).className = "cell";
                // Create Listener for entering Cell, inside Function scope

                newCell.style.padding = (225/cellNum)+'px'
            };

        };
    };
defaultGrid();


//Assign color when mouseover
function colorCell (x) {
    for (let i = 0; i <= (x*x)-1; i++) {
    cells[i].addEventListener('mouseover', function(e){
        e.target.style.backgroundColor = '#000';
    })
}};
colorCell(resolution);

//Button to resize the resolution
button.addEventListener('click', setResolution)
function setResolution () {
    let promptResolution = prompt ('Resolution?')
    if (promptResolution > 64) {
        alert ('Error: Only Values up to 64 are allowed.')
    } else {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        makeRows(promptResolution);
        makeColumns(promptResolution);
        colorCell(promptResolution);
    }
};