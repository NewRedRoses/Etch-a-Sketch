const button = document.querySelector("#rowChanger");

let userInput = undefined;

button.addEventListener("click", (event) => {
  userInput = prompt(
    "Please type in how many rows you want.\nThe limit is 30."
  );
  if (userInput > 30) {
    userInput = undefined;
    alert("Try a number less than 30!");
  } else {
    deleteCurrentGrid();
    createGrid(userInput, userInput);
  }
});

if (userInput != undefined) {
  console.log("user input is no longer undefined");
  createGrid(userInput, userInput);
} else {
  console.log("user input is undefined");
  createGrid(16, 16);
}
colorCellGrid();

function colorCellGrid() {
  const element = document.querySelector("#grid");
  element.addEventListener("mouseover", (event) => {
    // if grid item is hovered over  add special class...
    if (event.target.getAttribute("class") == "gridItem") {
      console.log("Coloring");
      event.target.classList.add("coloredGridItem");
    }
  });
}

function createGrid(NUM_OF_ROWS, NUM_OF_COLUMNS) {
  let grid = document.createElement("div");
  const container = document.querySelector(".container");

  grid.setAttribute("id", "grid");
  container.appendChild(grid);

  const gridSelector = document.querySelector("#grid");
  let counter = 0;
  for (let x = 0; x < NUM_OF_ROWS; x++) {
    for (let y = 0; y < NUM_OF_COLUMNS; y++) {
      const gridItem = document.createElement("div");
      gridItem.classList.add("gridItem");
      gridSelector.appendChild(gridItem);
      counter++;
    }
  }
}

function deleteCurrentGrid() {
  const allGridItems = document
    .querySelectorAll(".gridItem")
    .forEach((e) => e.remove());
}
