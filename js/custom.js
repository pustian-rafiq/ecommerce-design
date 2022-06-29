const menuIconBar = document.getElementById('menuBar')
const navBar = document.getElementById('navbar')
const close = document.getElementById('close')

//When click humbarger icon,add  active class
if(menuIconBar){
    menuIconBar.addEventListener("click", ()=> {
        navBar.classList.add('active')
    })
}
//When click close icon,remove active class
if(close){
    close.addEventListener("click", ()=> {
        navBar.classList.remove('active')
    })
}