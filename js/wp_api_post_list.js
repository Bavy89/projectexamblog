// Create the const-variable
const latestposts = document.querySelector(".post-container"); 

// Wordpress post API list
const url = "https://projectblog.bavadonoroff.com/wp-json/wc/store/products"; 

// Bring the post
async function getProduct() {
    // Using fetch() API to retrive the posts
    const response = await fetch(url); 
    const results = await response.json();
    console.log(results);
    // Loop for each post
    for (let i = 0; i < results.length; i++) {
        latestposts.innerHTML += `
        <div class="post-content">
            <h2>${results[i].name}</h2>
            <p>${results[i].short_description}</p>
            <div class="cta cta-small">View</div>    
        </div>
        `;
    }
}

getProduct();