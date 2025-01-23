

let btnClose=document.querySelector("#close")
let btnView=document.querySelector(".menu-btn")
let mapNaveg=document.querySelector(".menu")

btnClose.addEventListener("click",()=>{

    mapNaveg.classList.remove("classView")
})


btnView.addEventListener("click",()=>{

mapNaveg.classList.add("classView")
})

let telaPreload=document.querySelector(".preload")

window.addEventListener("load",()=>{
    telaPreload.style.display="none"

})
