document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.auth__tab');
    const forms = document.querySelectorAll('.auth__form');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            tabs.forEach(t => t.classList.toggle('active'));
            
            forms.forEach(form => form.classList.toggle('active'));
        });
    });
});