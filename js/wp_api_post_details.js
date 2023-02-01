// Create the const-variable
const productContainer = document.querySelector(".single-product-image"); 
const productName = document.querySelector(".product-name"); 
const productDescription = document.querySelector(".product-description"); 
const productPrice = document.querySelector(".product-price"); 

const thisQueryData = document.location.search;
const params = new URLSearchParams(thisQueryData); 
const id = params.get("id"); 

// Bring the specific product from Wordpress by the product id
const detailsUrl = "https://rainydays.bavadonoroff.com/wp-json/wc/store/products/" + id;

// Fetch the specific product
async function fetchProduct() {
    const response = await fetch(detailsUrl); 
    const details = await response.json(); 
    createTheHtml(details); 
}

fetchProduct(); 
// Create the html
function createTheHtml(details) {

//Set the product image
 productContainer.innerHTML += `
    <div class="single-product-image">
        <img src="${details.images[0].src}">
    </div>
    `; 
// Set the product price
    productPrice.innerHTML += `
   <h3 class="product-price">Price: ${details.prices['price']} kr</h3>
    `; 
// Set the product name
 productName.innerHTML += `
   <p class="product-name">${details.name}</p>
    `; 
// Set the product description
 productDescription.innerHTML += `
   <p class="product-description">${details.description}</p>
    `
}