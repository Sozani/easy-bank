const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".iconlose");
const menuIcon = document.querySelector(".iconburgar");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    iconlose.style.display = "none";
    iconburgar.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    iconlose.style.display = "block";
    iconburgar.style.display = "none";
   
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)