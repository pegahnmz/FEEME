const mobileMenu = document.querySelector(".mobile__menu");
const mobileList = document.querySelector(".mobile__list");


mobileMenu.addEventListener("click",()=>{
    mobileMenu.classList.toggle("line__clicked")
    mobileList.classList.toggle("mobile__list--show")
})
