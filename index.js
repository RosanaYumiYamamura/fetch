const productsList = document.getElementById("productsList");
const btn = document.querySelectorAll("button");
const randomProductContainer = document.getElementById("randomProductContainer")
btn[0].addEventListener("click",getAll);
btn[1].addEventListener("click",getOne);

const URL = "https://fakestoreapi.com/products/";
function getAll (){
  fetch(URL, { 
    method: "get",
  })
    .then(res => res.json())
    .then(data => render(data));
}

function getOne () {
    const randomID = Math.floor(Math.random() * 20 + 1);
    fetch(URL+randomID, { 
        method: "get",
      })
        .then(res => res.json())
        .then(data => renderOne(data));
}

function render(data) {
    productsList.childNodes.forEach(ch => ch.remove());
 for (product of data) {
   const item = document.createElement("li");
   item.textContent = `${product.title} - $${product.price}`;
   productsList.appendChild(item);
 }
}

function renderOne(data) {
    randomProductContainer.textContent = `${data.title} - $${data.price}`;
}