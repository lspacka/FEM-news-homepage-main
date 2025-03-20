const overlay = document.querySelector('.overlay')
const burger = document.querySelector('.burger-button')
const links = document.querySelector('.header-links')
const close_menu = document.querySelector('.close-menu')
const media_query = window.matchMedia('(min-width: 1200px)')

function handleViewportChange(event) {
    if (event.matches) {
        links.style.animation = ''
        links.classList.remove('visible')
        overlay.style.display = 'none'
    }
}

media_query.addEventListener('change', handleViewportChange)
handleViewportChange(media_query)

burger.addEventListener('click', () => {
    links.style.animation = 'slide-in .3s ease-in forwards'
    links.classList.add('visible')
    overlay.style.display = 'block'
})

close_menu.addEventListener('click', () => {
    links.style.animation = 'slide-out .3s ease-out forwards'
    overlay.style.display = 'none'
})