const menuBtn = document.getElementById("menu");
const closeMenuBtn = document.getElementById("closeMenu");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.add("show");
});

closeMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("show");
});
