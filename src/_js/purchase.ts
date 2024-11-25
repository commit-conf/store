const purchaseButtons = document.querySelectorAll('.purchase-button');
purchaseButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    const confirmation = button.parentElement?.querySelector('.purchase-confirmation');
    confirmation?.classList.remove('hide');
    button.classList.add('hide');
  });
});
const purchaseCloseButtons = document.querySelectorAll('.purchase-cancel');
purchaseCloseButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    const confirmation = button.closest('.purchase-confirmation');
    confirmation?.classList.add('hide');
    const purchaseButton = confirmation?.parentElement?.querySelector('.purchase-button');
    purchaseButton?.classList.remove('hide');
  });
});