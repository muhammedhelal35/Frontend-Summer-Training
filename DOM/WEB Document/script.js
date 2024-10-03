
const nav = document.getElementById('link');
nav.style.listStyleType = 'circle';

const links = document.querySelectorAll('#link a');
links.forEach(link => {
  link.style.color = 'blue';
});

const header = document.getElementById('header');

const headerDouble = header.cloneNode(true);

headerDouble.id = 'header-double';

document.body.appendChild(headerDouble);


 