const burgerMenu = document.getElementById('burgerMenu')
const burgerItems = document.getElementById('burgerItems')

burgerMenu.addEventListener('click', () => {
    burgerItems.classList.toggle('active')
})