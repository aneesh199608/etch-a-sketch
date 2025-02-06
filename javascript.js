//function to create a 16*16 grid

function createGrid (number) {
    container.innerHTML = "";
    for (let i = 0; i < number; i++) {
        let rowDiv = document.createElement("div");
        rowDiv.classList.add("row-div");

        for (let j = 0; j < number; j++) {
            let columnDiv = document.createElement("column-div");
            columnDiv.classList.add("column-div");

            columnDiv.addEventListener("mouseover", (e) => {
                // div.classList.add("hovered");
                columnDiv.style.backgroundColor= "red";
            });

            rowDiv.appendChild(columnDiv);
        }
        container.appendChild(rowDiv);
    }
}

//input prompt

let changeGrid = document.querySelector(".change-grid");
changeGrid.addEventListener("click", () => {
    let questionGrid = prompt("Enter your prefered grid size");
    while(questionGrid>64) {
        questionGrid = prompt("Please enter your grid size again");
    }
        return createGrid (questionGrid);
});

//all the other functions

let container = document.querySelector(".container-grid");
createGrid (16);