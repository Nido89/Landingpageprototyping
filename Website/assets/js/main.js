const hamburger_checkbox = document.getElementById("hamburger");
const navbar = document.querySelector(".navbar");


hamburger_checkbox.addEventListener("change",function(){
    navbar.classList.toggle('active');
});