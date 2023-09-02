const row = 16;
const column = 16;

const grid = document.createElement('div');
grid.className = 'grid';
document.body.appendChild(grid);

for (let i=0; i < column + 1 ; i++) {
    let column = document.createElement('div');
    column.className = `column ${i}`;
    grid.appendChild(column);
    for (let j=0; j < row +1; j++) {
        let row = document.createElement('div');
        row.className = `row ${j}`;
        column.appendChild(row);
    }
}   

const rows = document.querySelectorAll('.row')
function coloring(line) {
    line.forEach ((element) => {
        element.addEventListener('mouseover', () => {
            element.classList.add('-selected')
        })
        element.addEventListener('click', () => {
            element.classList.remove('-selected')
        })
    }) 
} coloring(rows);


function deleteBefore() {
    const deleteGrid = document.querySelectorAll('.grid')
    deleteGrid.forEach ((element) => {
        element.remove();
    })
}

const btn = document.querySelector('#btn');
btn.addEventListener('click', customGrid);

let userNumber = '';
function customGrid() {
    deleteBefore();
    const grid = document.createElement('div');
    grid.className = 'grid';
    document.body.appendChild(grid);
    userNumber = prompt('Grid Length?');
    if (userNumber > 100) alert('Input can not exceed 100');
    if (userNumber == isNaN) alert('Input must be a number');
    for (let i=0; i <= userNumber; i++) {
        let column = document.createElement('div');
        column.className = `column ${i}`;
        grid.appendChild(column);
        for (let j=0; j <= userNumber; j++) {
            let row = document.createElement('div');
            row.className = `row ${j}`;
            column.appendChild(row);
        }
    } 
    const rows = document.querySelectorAll('.row')
    coloring(rows);
}