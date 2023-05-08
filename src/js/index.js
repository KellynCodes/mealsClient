const navbarToggle = document.querySelector(".navbar_toggle");
const searchNav = document.querySelector(".search_nav");
const navLinks = document.querySelector(".navlinks");
const searchBar = document.querySelector(".search_bar");
const searchBtn = document.querySelector(".bi-search");

//search bar displaying on click; and scroll effect when clicked
searchBtn.addEventListener("click", () => {
  if (searchBar.classList.contains("what_to_search")) {
    searchBar.classList.remove("what_to_search");
  } else {
    searchBar.classList.add("what_to_search");
    if (window.innerWidth < 1200) {
      window.scroll({
        top: 450,
        behavior: "smooth",
      });
    } else {
      window.scroll({
        top: 600,
        behavior: "smooth",
      });
    }
  }
});

//search filtration function;

navbarToggle.addEventListener("click", () => {
  navbarToggle.classList.toggle("active");
  harmBurgar();
});
const harmBurgar = () => {
  if (
    navLinks.classList.contains("clicked") &&
    searchNav.classList.contains("clicked")
  ) {
    searchNav.classList.remove("clicked");
    navLinks.classList.remove("clicked");
  } else {
    navLinks.classList.add("clicked");
    searchNav.classList.add("clicked");
  }
};

//close harmburgar menu on click of navlinks
const RegLinks = document.querySelectorAll(".search_nav .registeration a");
const NavLinks = document.querySelectorAll(".navlinks ul li");

RegLinks.forEach((link) => {
  link.addEventListener("click", () => {
    harmBurgar();
    CloseBtn();
  });
});

NavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    harmBurgar();
    CloseBtn();
  });
});

const CloseBtn = () => {
  if (
    navLinks.classList.contains("clicked") &&
    searchNav.classList.contains("clicked")
  ) {
    navbarToggle.classList.add("active");
  } else {
    navbarToggle.classList.remove("active");
  }
};
