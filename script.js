const container = document.querySelector(".container");

const button = document.querySelector("button");
let gridSize = 16;

// INITIALIZATION
createGrid(gridSize);

// BUTTON FUNCTIONALITY
button.addEventListener("click", () => {
  gridSize = prompt("Enter your desired grid size", 16);

  if (gridSize > 100) {
    gridSize = 100;
    alert("Your size has been capped to 100 due to performance issues")
  } else if (!gridSize) gridSize = 16;
  createGrid(gridSize);
});

// CREATING GRID
function createGrid(size) {
  container.innerHTML = "";

  for (let i = 0; i < size; i++) {
    let columnDiv = document.createElement("div");
    columnDiv.style.cssText = `
      display: flex;
      flex-direction: column;
      gap: 1px; flex: 1;
    `;

    for (let j = 0; j < size; j++) {
      let rowDiv = document.createElement("div");
      rowDiv.classList.add("hoverDiv");

      columnDiv.appendChild(rowDiv);
    }

    container.appendChild(columnDiv);
  }
  
  const hoverDivs = document.querySelectorAll(".hoverDiv");
  
  // HOVER
  hoverDivs.forEach((div) => {
    div.addEventListener("mouseenter", () => {
      div.style.transition = "";
      div.style.backgroundColor = "black";
    });
  });
  
  hoverDivs.forEach((div) => {
    div.addEventListener("mouseleave", () => {
      div.style.transition = "all 1s";
      div.style.backgroundColor = "";
    });
  });
}