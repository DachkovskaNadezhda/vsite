document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.auth__tab');
    const forms = document.querySelectorAll('.auth__form');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Убираем активный класс со всех вкладок
            tabs.forEach(t => t.classList.remove('active'));
            // Добавляем активный класс текущей вкладке
            this.classList.add('active');
            
            // Скрываем все формы
            forms.forEach(form => form.classList.remove('active'));
            // Показываем нужную форму
            document.getElementById(`${tabId}-form`).classList.add('active');
        });
    });
});