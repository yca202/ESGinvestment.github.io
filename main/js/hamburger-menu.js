// Function to handle the resizing of the window
function handleResize() {
  if (window.innerWidth <= 1024) {
    document.querySelector("div.header ul.menu").classList.remove("show"); // Remove the show class from the menu
    document.querySelector("div.header a").style.color = "inherit";
    document.querySelector(".hamburger-menu").style.color = "inherit";
    document.querySelector(".Info").classList.remove("show-dropdown"); // Remove the show-dropdown class from the dropdown menu
    document.querySelector(".dropdown-menu").classList.remove("show-dropdown"); // Remove the show-dropdown class from the dropdown menu
  } else {
    document.querySelector(".Info").classList.remove("show-dropdown"); // Remove the show-dropdown class from the dropdown menu
    document.querySelector(".dropdown-menu").classList.remove("show-dropdown"); // Remove the show-dropdown class from the dropdown menu
    
    // Close the dropdown menu when clicking outside of it
    window.addEventListener("click", function (event) {
      if ((!event.target.matches("li.Info")) && (window.innerWidth >= 1024)) {
        var dropdowns = document.getElementsByClassName("dropdown-menu");
        for (var i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show-dropdown')) {
            openDropdown.classList.remove('show-dropdown');
          }
          if (document.querySelector(".Info").classList.contains('show-dropdown')){
            document.querySelector(".Info").classList.remove('show-dropdown');
          }
        }
      }
    });
  }
}

document.querySelector(".Info").addEventListener("click", function() {
  this.classList.toggle("show-dropdown");
});


document.querySelector("li.Info").addEventListener("click", function (event) {
  event.stopPropagation();
  document.querySelector(".dropdown-menu").classList.toggle("show-dropdown");
});

// Toggle the show class on the menu when clicking on the hamburger menu
document.querySelector(".hamburger-menu").addEventListener("click", function () {
  let menu = document.querySelector("div.header ul.menu");
  let header = document.querySelector("div.header a");
  let hamburger = document.querySelector(".hamburger-menu");

  menu.classList.toggle("show");

  // If the menu is shown, change header color to white, otherwise set it to inherit
  if (menu.classList.contains("show")) {
    header.style.color = "white";
    hamburger.style.color = "white";
  } else {
    header.style.color = "inherit";
    hamburger.style.color = "inherit";
  }
});

// Close the menu when clicking outside of it
window.addEventListener("click", function (event) {
  let menu = document.querySelector("div.header ul.menu");
  let header = document.querySelector("div.header a");
  let hamburger = document.querySelector(".hamburger-menu");

  if (!event.target.matches(".hamburger-menu") && window.innerWidth <= 1024) {
    menu.classList.remove("show");

    // When the menu is closed, set the header color to inherit
    header.style.color = "inherit";
    hamburger.style.color = "inherit";
  }
});

// Handle the resizing of the window when the window is resized
window.addEventListener("resize", function () {
  handleResize();
});

// Handle the resizing of the window when the page is loaded
handleResize();


document.addEventListener("DOMContentLoaded", function () {
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("header").style.top = "0";
    } else {
      document.getElementById("header").style.top = "-100px"; // replace 50px with the height of your header
    }
    prevScrollpos = currentScrollPos;
  }
});

// Get the elements
const header = document.querySelector(".header");
const targetSection = document.querySelector("section");

// Scroll event handler
function changeHeaderBackground() {
  // Change the background of the header only if the section is at the very top of the viewport
  if (window.pageYOffset >= targetSection.offsetTop) {
    header.classList.add("white-background");
  } else {
    header.classList.remove("white-background");
  }
}
changeHeaderBackground(); // Call the function once to set the initial state
document.addEventListener('scroll', changeHeaderBackground);

