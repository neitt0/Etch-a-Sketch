const container = document.querySelector(".container");

for (let i = 0; i < 16; i++) {
  let columnDiv = document.createElement("div");
  columnDiv.style.cssText = `
    display: flex;
    flex-direction: column;
    gap: 1px; flex: 1;
    `;
  // columnDiv.style.backgroundColor = "yellow";
  
  for (let j = 0; j < 16; j++) {
    let rowDiv = document.createElement("div");
    rowDiv.classList.add("hoverDiv")

    columnDiv.appendChild(rowDiv)
  }

  container.appendChild(columnDiv);
}
