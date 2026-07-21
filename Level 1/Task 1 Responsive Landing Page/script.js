const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
menuBtn.addEventListener("click",()=>{
    navLinks.classList.toggle("active");
    navLinks.computedStyleMap.display =
    navLinks.computedStyleMap.display == "flex"
    ? "none"
    : "flex";
});