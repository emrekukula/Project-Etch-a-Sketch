const row = 16;
const column = 16;

const grid = document.createElement('div');
grid.className = 'grid';
document.body.appendChild(grid);

for (let i=0; i < column + 1 ; i++) {
    let column = document.createElement('div');
    column.className = `column${i}`;
    grid.appendChild(column);
    for (let j=0; j < row +1; j++) {
        let row = document.createElement('div');
        row.className = `row ${j}`;
        row.textContent = `${j} - ${i}`;
        column.appendChild(row);
    }
}

const rows = document.querySelectorAll('.row')
rows.forEach ((element) => {
    element.addEventListener('mouseover', () => {
        element.classList.add('-selected')
    })
    element.addEventListener('click', () => {
        element.classList.remove('-selected')
    })
}) 

