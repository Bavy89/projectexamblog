const latestposts = document.querySelector(".featured");
const url = "https://projectblog.bavadonoroff.com/wp-json/wc/store/products";



let products = [];
let currentIndex = 0;
const showLimit = 4;

async function getProduct() {
    try {
        const response = await fetch(url);
        const results = await response.json();

        products = results;
        showMore();
    } catch (error) {
        console.error(error);
    }
}

function showMore() {
    const showCount = currentIndex + showLimit;
    for (let i = currentIndex; i < showCount && i < products.length; i++) {
        addArticle(products[i].description, products[i].name, products[i].images[0].src);
        currentIndex++;
    }

    if (currentIndex >= products.length) {
        document.getElementById("show-more").style.display = "none";
    }
}

function addArticle(description, subject, img) {
    const articlesContainer = document.getElementById("articles");
    const postContent = document.createElement("div");
    postContent.classList.add("post-content");

    const subjectElement = document.createElement("h2");
    subjectElement.innerText = subject;

    const imgElement = document.createElement("img");
    imgElement.src = img;

    const descriptionElement = document.createElement("p");
    descriptionElement.innerHTML = description;

    const author = document.createElement("h4");
    author.innerText = "By Bavy.";

    postContent.appendChild(subjectElement);
    postContent.appendChild(imgElement);
    postContent.appendChild(descriptionElement);
    postContent.appendChild(author);

    articlesContainer.appendChild(postContent);
}


getProduct();


