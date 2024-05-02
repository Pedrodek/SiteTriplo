const sidebar = document.querySelector('aside');
const buttonSidebar = document.querySelector('.sidebar-icon');
const closeSidebar = document.querySelector('.sidebar-close-icon');


buttonSidebar.addEventListener('click', () => {
    sidebar.classList.add('show');
    buttonSidebar.classList.add('active');
    closeSidebar.classList.add('active');
});

closeSidebar.addEventListener('click', () => {
    sidebar.classList.remove('show');
    buttonSidebar.classList.remove('active');
    closeSidebar.classList.remove('active');
});