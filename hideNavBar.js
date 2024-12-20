document.addEventListener("DOMContentLoaded", function () {
  var navBar = document.querySelector(".navbar.main-nav"); // Targets the element by class.
  if (navBar) {
    navBar.style.display = "none"; // Hides the navigation bar.
  } else {
    console.error("Navigation bar element not found.");
  }
});
