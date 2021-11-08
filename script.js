let body, h1, lightbtn, darkbtn;

window.onload = function() {
   body = document.querySelector("body");
   h1 = document.querySelector("h1");
   links = document.querySelector(".links");
   lightbtn = document.querySelector("#light");
   darkbtn = document.querySelector("#dark");

   lightbtn.addEventListener('click', lightchange);
   darkbtn.addEventListener('click', darkchange);
};

function lightchange() {
    body.classList.toggle('body-light');
    body.classList.toggle('body-dark');
    h1.classList.toggle('h1-dark');
    h1.classList.toggle('h1-light');;
    links.classList.toggle('links-light');
    links.classList.toggle('links-dark');
}
function darkchange() {
    body.classList.toggle('body-light');
    body.classList.toggle('body-dark');
    h1.classList.toggle('h1-dark');
    h1.classList.toggle('h1-light');
    links.classList.toggle('links-light');
    links.classList.toggle('links-dark');
}