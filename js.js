const nav = document.querySelector("#nav-bar-container");
const abrir = document.querySelector("#abrir-boton");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click",() =>{
    nav.classList.add("nav-bar-container-visible");
})

cerrar.addEventListener("click",() =>{
    nav.classList.remove("nav-bar-container-visible");
})