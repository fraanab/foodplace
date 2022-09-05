const menu_toggle = document.querySelector('#enable-nav');
const sidebar = document.querySelector('#sidebar');

menu_toggle.addEventListener('click', () => {
    menu_toggle.classList.toggle('is-active');
    sidebar.classList.toggle('is-active');
});