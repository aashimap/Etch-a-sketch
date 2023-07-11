const container = document.getElementById("container");

function makeRows(rows, cols) {
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      let cell = document.createElement("div");
      container.appendChild(cell).className = "cells";
    }
  }
}
makeRows(16, 16);

const cells = document.querySelectorAll(".cells");

cells.forEach((e) =>
  e.addEventListener("mouseover", function () {
    e.style.background = "black";
    e.addEventListener("click", function () {
      e.style.background = "darkkhaki";
    });
  })
);

const newGrid = document.getElementById("size-selecting-button");
const form = document.getElementById("form");

newGrid.addEventListener("click", () => {
  if (form.style.display === "none") {
    // this SHOWS the form
    form.style.display = "block";
  } else {
    // this HIDES the form
    form.style.display = "none";
  }
});

const sumbit = document.getElementById("submit");

sumbit.addEventListener("click", (e) => {
  e.preventDefault();

  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;

  if (num1 < 101 && num2 < 101) {
    document.getElementById(
      "container"
    ).style.gridTemplateRows = `repeat(${num1},1fr)`;
    document.getElementById(
      "container"
    ).style.gridTemplateColumns = `repeat(${num2},1fr)`;

    makeRows(num1, num2);
  }
});

const clear = document.getElementById("grid-clearing-button");

clear.addEventListener("click", () => {
  cells.forEach((e) => {
    e.style.background = "darkkhaki";
  });
});
