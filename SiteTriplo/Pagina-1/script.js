const sidebar = document.querySelector('aside');
const buttonSidebar = document.querySelector('.sidebar-icon');
const closeSidebar = document.querySelector('.sidebar-close-icon');
const hrAside = document.querySelector('.hr-aside');
const quad = document.querySelector('.quad');


buttonSidebar.addEventListener('click', () => {
    sidebar.classList.add('show');
    hrAside.classList.add('show');
    sidebar.children.item(2).children.item(0).classList.add('show')
    sidebar.children.item(2).children.item(1).classList.add('show')
    buttonSidebar.classList.add('active');
    closeSidebar.classList.add('active');
});

closeSidebar.addEventListener('click', () => {
    sidebar.classList.remove('show');
    hrAside.classList.remove('show');
    sidebar.children.item(2).children.item(0).classList.remove('show')
    sidebar.children.item(2).children.item(1).classList.remove('show')
    buttonSidebar.classList.remove('active');
    closeSidebar.classList.remove('active');
});

quad.addEventListener('click', () => {
    quad.classList.toggle('clicked')
    quad.children.item(0).classList.toggle('clicked')
})