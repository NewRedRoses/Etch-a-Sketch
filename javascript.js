const grid = document.querySelector("#grid");

const NUM_OF_ROWS = 16;
const NUM_OF_COLUMNS = 16;

let counter = 0;
for (let x = 0; x < NUM_OF_ROWS; x++) {
  for (let y = 0; y < NUM_OF_COLUMNS; y++) {
    const gridItem = document.createElement("div");

    gridItem.classList.add("gridItem");
    gridItem.classList.add(counter);
    // gridItem.textContent = "x";
    grid.appendChild(gridItem);
    counter++;
  }
}

// the JavaScript file
const hover = document.querySelector(".gridItem");
hover.addEventListener("click", () => {
  console.log("Hello World");
});
