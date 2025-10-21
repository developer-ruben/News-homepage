document.addEventListener("DOMContentLoaded", () => {
  const menuOpenBtn = document.getElementById("menu-open");
  const menuCloseBtn = document.getElementById("menu-close");
  const nav = document.getElementById("nav");

  if (!menuOpenBtn || !menuCloseBtn || !nav) {
    console.error("Elements not found.");
    return;
  }

  const toggleMenu = () => nav.classList.toggle("header__nav--open");

  menuOpenBtn.addEventListener("click", toggleMenu);
  menuCloseBtn.addEventListener("click", toggleMenu);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && nav.classList.contains("header__nav--open")) {
      toggleMenu();
    }
  });
});
