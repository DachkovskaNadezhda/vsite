const element = document.getElementById('menu-wrapper');

element.addEventListener('click', function(event) {
  let item = event.target;
  if (item.classList.contains("menu__img")) {
    window.location.href = item.nextElementSibling.getAttribute('href');
  }
});