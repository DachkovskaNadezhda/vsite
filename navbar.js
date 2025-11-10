fetch('./navbar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar-container').innerHTML = data;
    })
    .catch(error => console.error('Error loading navbar:', error));

function toggleSearchCatalogInput() {
    let element =document.getElementById('search-catalog__input');
    element.classList.toggle('search-catalog__input--visible');
};    