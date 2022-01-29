let sctCakes = document.getElementById("cake-products");
let sctCupcakes = document.getElementById("cupcake-products");
let sctLunchbox = document.getElementById("lunchbox-products");
var modal = document.getElementById("modal");
let imgLightbox = document.getElementById("img-lightbox");
let captionText = document.getElementById("caption");
let closeIcon = document.getElementById("close");


let cakeList = [{
        img: './images/catalogo/harry-cake.jpeg',
        name: 'Harry Potter & cats cake',
    },
    {
        img: './images/catalogo/mermaid-cake.jpeg',
        name: 'Mermaid cake',
    },
    {
        img: './images/catalogo/halloween-cake.jpeg',
        name: 'Halloween cake',
    },
    {
        img: './images/catalogo/chocolate-cake.jpeg',
        name: 'Choco cake',
    },
    {
        img: './images/catalogo/fox-cake.jpeg',
        name: 'Fox cake',
    },
    {
        img: './images/catalogo/oreo-cake.jpeg',
        name: 'Oreo cake',
    },
    {
        img: './images/catalogo/butterfly-cake.jpeg',
        name: 'Butterfly cake',
    },
    {
        img: './images/catalogo/moana-cake.jpeg',
        name: 'Moana cake',
    },
    {
        img: './images/catalogo/unicorn-cake.jpeg',
        name: 'Unicorn cake',
    },
    {
        img: './images/catalogo/sullivan-cake.jpeg',
        name: 'Sullivan cake',
    },
    {
        img: './images/catalogo/leia-cake.jpeg',
        name: 'Star Wars cake',
    },
    {
        img: './images/catalogo/flower-cake.jpeg',
        name: 'Flower pot cake',
    },
];


let cupCakeList = [{
        img: './images/catalogo/mermaid-cupcake.jpeg',
        name: 'Mermaid cupcakes',
    },
    {
        img: './images/catalogo/avengers-cupcake.jpeg',
        name: 'Avengers cupcakes',
    },
    {
        img: './images/catalogo/toy-cupcake.jpeg',
        name: 'Toy Story cupcakes',
    },
    {
        img: './images/catalogo/animal-cupcake.jpeg',
        name: 'Animal cupcakes',
    },
    {
        img: './images/catalogo/halloween-cupcake.jpeg',
        name: 'Halloween cupcakes',
    },
    {
        img: './images/catalogo/harry-cupcake.jpeg',
        name: 'Harry Potter cupcakes',
    },
    {
        img: './images/catalogo/star-cupcake.jpeg',
        name: 'Star Wars cupcakes',
    },
    {
        img: './images/catalogo/valentine-cupcake.jpeg',
        name: "Happy Valentines Day cupcakes",
    },
    {
        img: './images/catalogo/baby-cupcake.jpeg',
        name: 'Baby shower cupcakes',
    },
    {
        img: './images/catalogo/mario-cupcake.jpeg',
        name: 'Mario Bros cupcakes',
    },
    {
        img: './images/catalogo/christmas-cupcake.jpeg',
        name: 'Christmas cupcakes',
    },
    {
        img: './images/catalogo/father-cupcake.jpeg',
        name: "Father`s day cupcakes",
    },
];

let lunchBoxCakeList = [{
        img: './images/catalogo/birthday1-lunchbox.jpeg',
        name: 'Birthday lunch box cakes',
    },
    {
        img: './images/catalogo/meme1-lunchbox.jpeg',
        name: 'Meme lunch box cake',
    },
    {
        img: './images/catalogo/patrick-lunchbox.jpeg',
        name: 'Patricio lunch box cake',
    },
    {
        img: './images/catalogo/meme2-lunchbox.jpeg',
        name: 'Meme lunch box cake',
    },
    {
        img: './images/catalogo/sunset-lunchbox.jpeg',
        name: 'Sunset lunch box cake',
    },
    {
        img: './images/catalogo/dino-lunchbox.jpeg',
        name: 'Dino lunch box cake',
    },
    {
        img: './images/catalogo/birthday2-lunchbox.jpeg',
        name: 'Birthday lunch box cake',
    },
    {
        img: './images/catalogo/grogu-lunchbox.jpeg',
        name: "The Child lunch box cake",
    },
    {
        img: './images/catalogo/birthday3-lunchbox.jpeg',
        name: 'Birthday lunch box cake',
    },
    {
        img: './images/catalogo/birthday5-lunchbox.jpg',
        name: 'Birthday lunch box cake',
    },
    {
        img: './images/catalogo/birthday4-lunchbox.jpg',
        name: 'Birthday lunch box cake',
    },
    {
        img: './images/catalogo/mothers-lunchbox.jpeg',
        name: "Mother`s day lunch box cake",
    },
];

const addProducts = (list, container) => {
    list.forEach(product => {
        let newProduct = document.createElement("div");
        newProduct.className = "product d-flex flex-column justify-content-center align-items-center"
        newProduct.innerHTML = `
            <img src="${product.img}" alt="${product.name}" onclick="createLightbox('${product.img}', '${product.name}')";>
            <a class="buy-button" href="https://wa.me/50672096520?text=Hola.%20Deseo%20cotizar%20y%20comprar%20el%20producto%3A%20${encodeURIComponent(product.name)}"><i class="fas fa-coins"></i>Comprar</a>
            <h3>${product.name}</h3>
        `
        container.appendChild(newProduct);
    });
}

const createLightbox = (img, caption) => {
    modal.style.display = "block";
    imgLightbox.src = img;
    captionText.innerHTML = caption;
}

const closeLightbox = () => {
    modal.style.display = "none";
}

addProducts(cakeList, sctCakes);
addProducts(cupCakeList, sctCupcakes);
addProducts(lunchBoxCakeList, sctLunchbox);