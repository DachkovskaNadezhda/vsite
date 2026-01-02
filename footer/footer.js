
fetch('./footer/footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer-wrapper').innerHTML = data;
    })
    .catch(error => console.error('Error loading footer:', error));
