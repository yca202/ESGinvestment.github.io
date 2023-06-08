// let observer = new IntersectionObserver((entries, observer) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       const battery = document.querySelector("#battery1");
//       const batteryBar = document.querySelector("#battery1 .battery-bar");
//       const batteryIndicator = document.querySelector(
//         "#battery1 .battery-indicator"
//       );

//       navigator.getBattery().then((battery) => {
//         updateBattery = function () {
//           batteryBar.style.animationIterationCount = "initial";
//           batteryIndicator.setAttribute(
//             "level",
//             `${parseInt(battery.level * 100)}%`
//           );
//           batteryBar.style.width = `${parseInt(0.65 * 100)}%`;
//         };

//         updateBattery();

//         battery.addEventListener("levelchange", function () {
//           updateBattery();
//         });
//       });
//     }
//   });
// });
// observer.observe(document.querySelector(`#battery1`));
