



let menuIcon = document.querySelector("header .menu");
let nav = document.querySelector(".navbar .nav");
let header = document.querySelector("header");



window.onscroll = function(){
  if(window.scrollY >= 100){
    header.classList.add("scroll")
  }else {
    header.classList.remove("scroll")

  }
}
console.log(nav)
menuIcon.addEventListener("click",()=>{
  nav.classList.toggle("active")
})




