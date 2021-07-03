const navbarMenu = document.querySelector("nav ul");
const navbarMenu = document.querySelector("nav a");

navbarToggler.addEventListener("click", navbarTogglerClick);

function navbarTogglerClick() {
  navbarMenu.classList.toggle("open");
}

navbarLinks.forEach((elem) => elem.addEventListener("click", navbarLinkClick));

function navbarLinkClick(event) {
  smoothScroll(event);

  if (navbarMenu.classList.contains("open")) {
    navbarToggler.click();
  }
}

function smoothScroll(event) {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute("href");
  window.scrollTo({
    top: document.querySelector(targetId).offsetTop,
    behavior: "smooth",
  });
}
