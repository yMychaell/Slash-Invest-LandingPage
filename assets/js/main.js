const btnMenu = document.querySelector('#btn--menu')

const showMenuMobile = event => {

  event.type === 'touchstart' ? e.preventDefault() : ''

  const navbar = document.querySelector('.navbar')

  navbar.classList.toggle('mobile')

}

btnMenu.addEventListener('click', showMenuMobile)
btnMenu.addEventListener('touchstart', showMenuMobile)
