const name = 'Федець Вячеслав';
document.getElementById('headerName').textContent = name;

const currentYear = new Date().getFullYear();
document.getElementById('footerName').textContent = '2025 Федець Вячеслав';

const button = document.getElementById('theme-toggle');

let isDarkMode = false;

button.addEventListener('click', function(){
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode', isDarkMode);

    button.textContent = isDarkMode ?
     'Змінити на світлу тему' :
      'Змінити на темну тему';
})