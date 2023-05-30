const container = document.querySelector(".container");

const gridSizeRequest = document.querySelector(".gridSizeRequest");
let gridSize = 16;

const clearButton = document.querySelector(".clear")

// INITIALIZATION
createGrid(gridSize);

clearButton.addEventListener("click", () => {
  createGrid(gridSize);
})

// gridSizeRequest FUNCTIONALITY
gridSizeRequest.addEventListener("click", () => {
  gridSize = prompt("Enter your desired grid size", 16);

  if (gridSize > 100) {
    gridSize = 100;
    alert("Your size has been capped to 100 due to performance issues");
  } else if (!gridSize) gridSize = 16;
  createGrid(gridSize);
});

// RANDOM NUMBER GEN
// "small" and "large" args for the purpose of learning
function getRandomNum(smallN, largeN) {
  return Math.floor(Math.random() * (largeN - smallN)) + smallN;
}

// CREATING GRID
function createGrid(size) {
  container.innerHTML = "";

  for (let i = 0; i < size; i++) {
    let columnDiv = document.createElement("div");
    columnDiv.style.cssText = `
    display: flex;
    flex-direction: column;
    gap: 1px;
    flex: 1;
    `;

    for (let j = 0; j < size; j++) {
      let rowDiv = document.createElement("div");
      rowDiv.classList.add("hoverDiv");

      columnDiv.appendChild(rowDiv);
    }

    container.appendChild(columnDiv);
  }

  
}

// HOVER
const hoverDivs = document.querySelectorAll(".hoverDiv");

container.addEventListener("mouseenter", () => {
  let colorValue = getRandomNum(0, 360);
  let saturation = 100;
  let lightness = 50;

  hoverDivs.forEach((div) => {
    div.addEventListener("mouseenter", () => {
      let color = `hsl(${colorValue}, ${saturation}%, ${lightness}%)`
      div.style.transition = "";
      div.style.backgroundColor = color;
      saturation -= .5;
      lightness -= .2;
    });

    // div.addEventListener("mouseleave", () => {
    //   div.style.transition = "all 3s";
    //   div.style.backgroundColor = "";
    // });
  });
});
