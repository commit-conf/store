const switchGroups = document.querySelectorAll("[data-switch-group]");

// change value using `data-switch`
const applySwitch = (group: string, value: string) => {
  // find all elements that belong to the group
  const elements = document.querySelectorAll(`[data-switch-group="${group}"]`);

  elements.forEach((el) => {
    const targetAttr = el.getAttribute("data-switch"); // attribute to change
    const newValue = el.getAttribute(`data-${value}`); // value to set

    if (targetAttr && newValue !== null) {
      (el as HTMLElement).setAttribute(targetAttr, newValue); // change the value
    }
  });
};

// Configure each group
switchGroups.forEach((groupElement) => {
  const select = groupElement.closest("select");

  if (select) {
    const group = select.getAttribute("data-switch-group");

    select.addEventListener("change", (event) => {
      const selectedValue = (event.target as HTMLSelectElement).value;
      if (group) {
        applySwitch(group, selectedValue); // Do the change
      }
    });

  }
});
