
const urls = [
    "https://via.placeholder.com/600/92c952",
    "https://via.placeholder.com/600/92c952",
    "https://via.placeholder.com/600/92c952",
    "https://via.placeholder.com/600/92c952",
    "https://via.placeholder.com/600/92c952",
    "https://via.placeholder.com/600/1ee8a4",
    "https://via.placeholder.com/600/1ee8a4",
    "https://via.placeholder.com/600/1ee8a4",
    "https://via.placeholder.com/600/1ee8a4",
    "https://via.placeholder.com/600/1ee8a4",
    "https://via.placeholder.com/600/1ee8a4",
    "https://via.placeholder.com/600/1ee8a4"
];


const images = document.querySelector('.image');

for (let i = 0; i < urls.length; i++) {
    setTimeout(() => {
        const img = document.createElement('img');
        img.src = urls[i];
        img.width = 250;
        img.height = 250;
        images.appendChild(img);
    }, 1000 * i);

}