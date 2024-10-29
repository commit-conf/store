const hamburger = document.querySelector(".topbar-hamburger");
const topbarContent = document.querySelector(".topbar-dropdown-content");
const topbar = document.querySelector(".topbar-dropdown");
if (topbar && hamburger) {
  topbar.classList.remove("topbar-dropdown");
  topbar.classList.add("topbar-dropdown-js");
  hamburger.addEventListener("click", function (e) {
    topbar.classList.toggle("active");
    e.stopPropagation();
  });

  window.addEventListener("click", function () {
    topbar.classList.remove("active");
  });
}
