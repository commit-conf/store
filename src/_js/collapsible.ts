const collapsible = document.querySelectorAll('.collapsible');
collapsible.forEach(function (item) {
  item.addEventListener('click', function () {
    const element = item.closest('.collapsible-container')?.querySelector('.collapsible-content');
    element?.classList.toggle('hide');
  });
});