fetch('./menu.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('menu-container').innerHTML = data;
    })
    .catch(error => console.error('Error loading navbar:', error));

function toggleMenuVisibility() {
    let element =document.getElementById('menu-container');
    element.classList.toggle('menu-container--visible');
};