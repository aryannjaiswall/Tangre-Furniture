const CircleSection = document.getElementById("circle-section");
const divp = document.getElementById("div-p");
const small = document.getElementById("small");
const smallp = document.getElementById("small-p");
const big = document.getElementById("big");

function HoverIn(){    
    big.classList.add("bluecircle");
    big.classList.remove("whitecircle");
    smallp.classList.add("blue");
    smallp.classList.remove("white");
    small.classList.remove("bluebcb");
    small.classList.add("whitebcb");
    divp.classList.add("blue");
    divp.classList.remove("white");
}

function HoverOut() {
    big.classList.remove("bluecircle");
    big.classList.add("whitecircle");
    smallp.classList.remove("blue");
    smallp.classList.add("white");
    small.classList.add("bluebcb");
    small.classList.remove("whitebcb");
    divp.classList.add("white");
    divp.classList.remove("blue");
}

CircleSection.addEventListener("mouseover", () => HoverIn());
CircleSection.addEventListener("mouseleave", () => HoverOut());

const cic = document.querySelectorAll(".circles-1");
console.log(cic);
Array(cic).forEach((element, index) => {
    console.log(element)
    console.log(index)
})
function myFunction() {
var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}