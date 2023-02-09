const latestposts = document.querySelector(".featured");
const url = "https://projectblog.bavadonoroff.com/wp-json/wc/store/products";

async function getProduct() {
    try {
        const response = await fetch(url);
        const results = await response.json();

        const latestFour = results.slice(0, 4);
        latestFour.forEach((res) => {
            addArticle(res.description, res.name, res.images[0].src);
        });
    } catch (error) {
        console.error(error);
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