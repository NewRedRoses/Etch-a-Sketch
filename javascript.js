const grid = document.querySelector("#grid");

const NUM_OF_ROWS = 16;
const NUM_OF_COLUMNS = 16;

let counter = 0;
for (let x = 0; x < NUM_OF_ROWS; x++) {
  for (let y = 0; y < NUM_OF_COLUMNS; y++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("gridItem");
    grid.appendChild(gridItem);
    counter++;
  }
}
const element = document.querySelector("#grid");
element.addEventListener("mouseover", (event) => {
  // if grid item only  run this...
  if (event.target.getAttribute("class") == "gridItem") {
    event.target.classList.add("coloredGridItem");
  }
});
