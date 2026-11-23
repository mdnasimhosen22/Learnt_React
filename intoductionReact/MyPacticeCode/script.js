const button = document.getElementById("button");
const totalPrice = document.getElementById("total");
const price = document.getElementById("price");

// data or state

const productPrice = 500;
let total = 0;

//set price initialyes
price.innerText = `ট ${productPrice}`;
totalPrice.innerHTML = "Total: ৳ 0";

button.addEventListener("click", () => {
  total += productPrice;

  // ui updated
  totalPrice.innerText = `Total: ৳ ${total}`;
});
