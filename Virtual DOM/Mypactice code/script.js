Array.prototype.myPush = function (...a) {
  this.push(a[0]);
  init();
};

const display = document.getElementById("fruits");

let fruits = ["mango", "banana", "orenge", "Apple"];
const init = function () {
  display.innerHTML = "";
  fruits.sort().forEach((fruit) => {
    const item = document.createElement("li");
    item.textContent = fruit;
    display.appendChild(item);
  });
};

const addItem = function () {
  fruits.myPush(document.getElementById("input").value);
};
init();
