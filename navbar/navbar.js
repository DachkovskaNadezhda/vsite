fetch('./navbar/navbar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar-wrapper').innerHTML = data;
    })
    .catch(error => console.error('Error loading navbar:', error));

fetch('./menu/menu.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('menu-wrapper').innerHTML = data;
    })
    .catch(error => console.error('Error loading menu:', error));



function toggleMenuVisibility() {
    let element = document.getElementById('menu');
    element.classList.toggle('menu--visible');

    let searchElement = document.getElementById('navbar__search-input');
    searchElement.classList.remove('navbar__search-input--visible');
};

function toggleSearchCatalogInput() {
    let element = document.getElementById('navbar__search-input');
    element.classList.toggle('navbar__search-input--visible');

    let menuElement = document.getElementById('menu');
    menuElement.classList.remove('menu--visible');
};  