const menuOpen = document.getElementById("menu-open");
const menuClose = document.getElementById("menu-close");
const menu = document.getElementById("menu");

menuOpen.addEventListener("click", (e) => {
  menu.classList.add("header__nav--open");
});

menuClose.addEventListener("click", (e) => {
  menu.classList.remove("header__nav--open");
});
