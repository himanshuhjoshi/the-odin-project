const container = document.querySelector("#container");
const gridSizeManual = document.querySelector("#gridSize");

let gridSize = 16*16;

gridSizeManual.addEventListener("click", () => {
    container.innerHTML="";
    const gridSizeManual = prompt("Manual Grid Size?");
    gridSize = gridSizeManual ** 2;
    
    for(let i=0; i<gridSize; i++){
        const gridElement = document.createElement('div');
        gridElement.classList.add("grid");
        container.appendChild(gridElement);
    }
    
    grid.forEach((element) => {
    element.addEventListener('mouseover' , 
        () => element.classList.add("paint"));
})
});

for(let i=0; i<gridSize; i++){
    const gridElement = document.createElement('div');
    gridElement.classList.add("grid");
    container.appendChild(gridElement);
}

const grid = document.querySelectorAll(".grid");

grid.forEach((element) => {
    element.addEventListener('mouseover' , 
        () => element.classList.add("paint"));
})

