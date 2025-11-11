fetch('./navbar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar-container').innerHTML = data;
    })
    .catch(error => console.error('Error loading navbar:', error));

fetch('./menu.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('menu-container').innerHTML = data;
    })
    .catch(error => console.error('Error loading navbar:', error));



function toggleMenuVisibility() {
    let element = document.getElementById('menu-container');
    element.classList.toggle('menu-container--visible');

    let searchElement = document.getElementById('search-catalog__input');
    searchElement.classList.remove('search-catalog__input--visible');
};

function toggleSearchCatalogInput() {
    let element = document.getElementById('search-catalog__input');
    element.classList.toggle('search-catalog__input--visible');

    let menuElement = document.getElementById('menu-container');
    menuElement.classList.remove('menu-container--visible');
};  