// Create the const-variableconst latestposts = document.querySelector(".featured"); 
// Wordpress post API listconst url = "https://projectblog.bavadonoroff.com/wp-json/wc/store/products"; 
// Bring the postasync function getProduct() {
  // Using fetch() API to retrive the posts  const response = await fetch(url); 
  const results = await response.json(); 
  // Loop for each post  console.log(results)
  for (let i = 0; i < results.length; i++) {
      var res = results[i]
      latestposts.innerHTML += `          <div class="featured_post">          <a href="post_description.html?id=${res.id}">              <img id="tents-image"src="${res.images[0].src}">              <span class="post_title">${res.name}</span>          </a>          <div class="cta-container">              <button class="cta cta-small" data-description="${res.description}" data-image="${res.images[0].src}">View</button>             </div>          </div>      `;
  }
  const buttons = document.querySelectorAll('.cta-container .cta');
  buttons.forEach(button => {
      button.addEventListener('click', function() {
          openModal(this.getAttribute('data-description'), this.getAttribute('data-image'));
      });
  });
}
getProduct();
function openModal(description, image) {
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
  document.getElementById("modal-results").innerHTML = `${description} <img style="width: 20rem;"src="${image}">`}
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
