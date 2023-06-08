// Function to handle the resizing of the window
function handleResize() {
  if (window.innerWidth <= 1024) {
    document.querySelector("div.header ul.menu").classList.remove("show"); // Remove the show class from the menu
    document.querySelector("div.header a").style.color = "inherit";
    document.querySelector(".hamburger-menu").style.color = "inherit";
    document.querySelector(".Info").classList.remove("show-dropdown"); // Remove the show-dropdown class from the dropdown menu
    document
      .querySelector(".Info .dropdown-menu")
      .classList.remove("show-dropdown"); // Remove the show-dropdown class from the dropdown menu
  } else {
    document.querySelector(".Info").classList.remove("show-dropdown"); // Remove the show-dropdown class from the dropdown menu
    document
      .querySelector(".Info .dropdown-menu")
      .classList.remove("show-dropdown"); // Remove the show-dropdown class from the dropdown menu
    removeAllDropdown();

    // Close the dropdown menu when clicking outside of it
    window.addEventListener("click", function (event) {
      removeAllDropdown();
    });
  }
}

// A function to remove all dropdown menus
function removeAllDropdown() {
  // Close the dropdown menu when clicking outside of it
  var dropdowns = document.getElementsByClassName("dropdown-menu");
  for (var i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains("show-dropdown")) {
      openDropdown.classList.remove("show-dropdown");
    }
    if (document.querySelector(".Info").classList.contains("show-dropdown")) {
      document.querySelector(".Info").classList.remove("show-dropdown");
    }
    if (
      document
        .querySelector(".universities")
        .classList.contains("show-dropdown")
    ) {
      document.querySelector(".universities").classList.remove("show-dropdown");
    }
  }
}

// Toggle the show-dropdown arrow
document.querySelector(".Info").addEventListener("click", function () {
  if (
    document.querySelector(".universities").classList.contains("show-dropdown")
  ) {
  }
  this.classList.toggle("show-dropdown");
});

// Toggle the show-dropdown class to show the list
document.querySelector("li.Info").addEventListener("click", function (event) {
  event.stopPropagation();
  document
    .querySelector(".Info .dropdown-menu")
    .classList.toggle("show-dropdown");
});

// Toggle the show-dropdown arrow
document.querySelector(".universities").addEventListener("click", function () {
  this.classList.toggle("show-dropdown");
});

// Toggle the show-dropdown class to show the list
document
  .querySelector("li.universities")
  .addEventListener("click", function (event) {
    event.stopPropagation();
    document
      .querySelector(".universities .dropdown-menu")
      .classList.toggle("show-dropdown");
  });

// Toggle the show class on the menu when clicking on the hamburger menu
document
  .querySelector(".hamburger-menu")
  .addEventListener("click", function () {
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
  if (!event.target.matches(".hamburger-menu") && window.innerWidth <= 1024) {
    closeHamburgerMenu();
  }
});

// Close the dropdown menu when clicking on the links
document.addEventListener("DOMContentLoaded", function () {
  var dropdownMenuLinks = document.querySelectorAll(".dropdown-menu a");

  dropdownMenuLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      closeHamburgerMenu();
    });
  });
});

// A function closing the hamburger menu
function closeHamburgerMenu() {
  let menu = document.querySelector("div.header ul.menu");
  if (menu.classList.contains("show")) {
    menu.classList.remove("show");
    let header = document.querySelector("div.header a");
    let hamburger = document.querySelector(".hamburger-menu");
    // If the menu is shown, change header color to white, otherwise set it to inherit
    if (menu.classList.contains("show")) {
      header.style.color = "white";
      hamburger.style.color = "white";
    } else {
      header.style.color = "inherit";
      hamburger.style.color = "inherit";
    }
  }
}

// Handle the resizing of the window when the page is loaded
handleResize();

// Give a background color to the header when the user scrolls down to sections
document.addEventListener("DOMContentLoaded", function () {
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("header").style.top = "0px";
    } else {
      document.getElementById("header").style.top = "-100px"; // replace 50px with the height of your header
    }
    prevScrollpos = currentScrollPos;
  };
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
document.addEventListener("scroll", changeHeaderBackground);

// Handle the resizing of the window when the window is resized
window.addEventListener("resize", function () {
  handleResize();
});
