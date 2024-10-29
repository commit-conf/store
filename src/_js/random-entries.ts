const randomEntries = document.querySelectorAll(".random-entry");
// get random item in randomEntries
const randomIndex = Math.floor(Math.random() * randomEntries.length);
Array.prototype.forEach.call(
  randomEntries,
  function (item: HTMLElement, index: number) {
    if (index === randomIndex) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  }
);
