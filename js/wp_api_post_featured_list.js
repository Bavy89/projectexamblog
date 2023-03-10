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
 for (let i = 1; i < results.length; i++) {
  if (i > 4) break; // stop looping once the 4th post is reached
  var res = results[i] 
  latestposts.innerHTML += `


 <div class="featured_post">
 <div class="featured_post_img"><img id="#"src="${res.images[0].src}"></div>
 <span class="post_title">${res.name}</span>
 </a>
 <div class="cta-container">
 <button class="cta cta-small" style="cursor: pointer;" data-subject="${res.name}" data-description="${res.description}" data-image="${res.images[0].src}">View</button>

 </div>
 </div>
 `; 
 } 
 const buttons = document.querySelectorAll('.cta-container .cta'); 
 buttons.forEach(button => { 
 button.addEventListener('click', function() { 
 openModal(this.getAttribute('data-subject'), this.getAttribute('data-description'), this.getAttribute('data-image')); 
 }); 
 }); 
} 
getProduct(); 

function openModal(subject, description, image) { 
    var modal = document.getElementById("myModal"); 
    modal.style.display = "block"; 
    document.getElementById("modal-results").innerHTML = `<h2>${subject}</h2>${description} <img style="width: 17rem;padding: 20px;"src="${image}">`
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



