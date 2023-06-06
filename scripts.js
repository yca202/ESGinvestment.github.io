document.addEventListener("DOMContentLoaded", function () {
  let observer = new IntersectionObserver(function (entries) {
    // Loop over the entries
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        // If the element is in the viewport, add the "show" class
        entry.target.classList.add("show");
      } else {
        // If the element is not in the viewport, remove the "show" class
        entry.target.classList.remove("show");
      }
    });
  });

  // Tell the observer which elements to track
  observer.observe(document.querySelector("#esg-explanation"));
});
