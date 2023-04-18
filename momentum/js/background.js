const images = ["1.jpg", "2.jpg", "0.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

bgImage.id = "background-img";

document.body.appendChild(bgImage);