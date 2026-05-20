import { add } from "./calculator.js";

const display = document.getElementById("display");

const inputA = document.getElementById("inputA");
const inputB = document.getElementById("inputB");

const addBtn = document.getElementById("addBtn");
const clearBtn = document.getElementById("clearBtn");

addBtn.addEventListener("click", () => {

  const a = Number(inputA.value);
  const b = Number(inputB.value);

  const result = add(a, b);

  display.textContent = result;
});

clearBtn.addEventListener("click", () => {

  inputA.value = "";
  inputB.value = "";

  display.textContent = "0";
});