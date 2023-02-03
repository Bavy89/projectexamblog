// Create the const-variable
const latestposts = document.querySelector(".featured"); 

// Wordpress post API list
const url = "https://projectblog.bavadonoroff.com/wp-json/wc/store/products"; 

// Bring the post
async function getProduct() {
    // Using fetch() API to retrive the posts
    const response = await fetch(url); 
    const results = await response.json(); 
    // Loop for each post
    for (let i = 0; i < results.length; i++) {
        latestposts.innerHTML += `
            <div class="featured_post">
            <a href="post_description.html?id=${results[i].id}">
                <img id="tents-image"src="${results[i].images[0].src}">
                <span class="post_title">${results[i].name}</span>
            </a>
            <div class="cta cta-small">View</div>    
            </div>
        `;
    }
}

getProduct();

function openModal(results) {
var modal = document.getElementById("myModal");
modal.style.display = "block";
     }

  var span = document.getElementsByClassName("close")[0];
  span.onclick = function() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
      }

window.onclick = function(event) {
    var modal = document.getElementById("myModal");
        if (event.target == modal) {
            modal.style.display = "none";
           } 
  }
