const row = 16;
const column = 16;

const grid = document.createElement('div');
grid.className = 'grid';
document.body.appendChild(grid);

for (let i=0; i < column; i++) {
    let column = document.createElement('div');
    column.className = 'column';
    grid.appendChild(column);
    for (let j=0; j < row; j++) {
        let row = document.createElement('div');
        row.className = 'row';
        column.appendChild(row);
    }
}   


const rows = document.querySelectorAll('.row')
function coloring(line) {
    line.forEach ((element) => {
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        element.addEventListener('mouseover', () => {
            element.style.backgroundColor = randomColor
            element.classList.add('-colored');
        })
        element.addEventListener('click', () => {
               if(element.className == 'row -colored') {
                element.classList.add('B80');
            } else if (element.classList == 'row -colored B80') {
                element.classList.remove('B80')
                element.classList.add('B60');
            } else if (element.classList == 'row -colored B60') {
                element.classList.remove('B60')
                element.classList.add('B40');
            } else if (element.classList == 'row -colored B40') {
                element.classList.remove('B40')
                element.classList.add('B20');
            } else if (element.classList == 'row -colored B20') {
                element.classList.remove('B20')
                element.classList.add('B00');
            }
        })
    }) }  coloring(rows);


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
    
    if (userNumber > 100) alert('Can not exceed 100');
    if (isNaN(userNumber)) alert('Must be a number');
    for (let i=0; i <= userNumber - 1; i++) {
        let column = document.createElement('div');
        column.className = 'column';
        grid.appendChild(column);
        for (let j=0; j <= userNumber - 1; j++) {
            let row = document.createElement('div');
            row.className = 'row';
            column.appendChild(row);
        }
    } 
    const rows = document.querySelectorAll('.row')
    coloring(rows);
}