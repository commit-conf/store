const select = document.querySelector('#switch');
const elements = document.querySelectorAll('[data-switch]');
select?.addEventListener('change', function (e) {
  const newValue = (e.target as HTMLSelectElement).value;
  elements.forEach((element) => {
    if (element.getAttribute('data-switch') == newValue) {
      element.classList.remove('hide');
    } else {
      element.classList.add('hide');
    }
  });
});