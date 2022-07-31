const imgs = [
  "img/1.jpg",
  "img/2.jpeg",
  "img/3.jpg",
  "img/4.jpeg",
  "img/5.jpg",
  "img/6.jpg",
  "img/7.jpg",
];

const img = document.createElement("img");
const randomImg = imgs[Math.floor(Math.random() * imgs.length)];
img.src = randomImg;
document.body.appendChild(img);
