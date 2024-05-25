const openNavBtn = document.querySelector(".openNav"),
  closeNavBtn = document.querySelector(".closeNav"),
  nav = document.querySelector("nav");

openNavBtn.addEventListener("click", toggleNav);
closeNavBtn.addEventListener("click", toggleNav);

function toggleNav() {
  if (nav.classList.contains("openNav")) {
    // nav is shown and its closing
    closeNavBtn.classList.toggle("hide");
    openNavBtn.classList.toggle("hide");
    nav.classList.add("closeNav");
    nav.classList.remove("openNav");
  } else {
    // nav is hiden and its opening
    closeNavBtn.classList.toggle("hide");
    openNavBtn.classList.toggle("hide");
    nav.classList.add("openNav");
    nav.classList.remove("closeNav");
  }
}

window.addEventListener("resize", () => {
  if (window.innerWidth <= 530) {
    if (nav.classList.contains("openNav")) {
      if (openNavBtn.classList.contains("hide")) {
        openNavBtn.classList.add("hide");
        closeNavBtn.classList.remove("hide");
      }
    } else {
      openNavBtn.classList.remove("hide");
      closeNavBtn.classList.add("hide");
    }
  } else {
    closeNavBtn.classList.add("hide");
    openNavBtn.classList.add("hide");
    nav.classList.add("openNav");
  }
});

window.addEventListener("load", () =>{
  if (window.innerWidth <= 530) {
    openNavBtn.classList.remove("hide");
  
  } else {
    closeNavBtn.classList.add("hide");
    openNavBtn.classList.add("hide");
    nav.classList.add("openNav");
  }
})