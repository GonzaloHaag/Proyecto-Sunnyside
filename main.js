const abrirMenu = document.querySelector("#abrir-menu");
const menuMobile = document.querySelector(".menu-mobile");

abrirMenu.addEventListener("click",()=>{
    menuMobile.classList.toggle("disabled");
})