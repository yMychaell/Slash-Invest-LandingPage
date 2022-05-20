const btnMenu = document.querySelector('#btn--menu')

const showMenuMobile = () => {
  const navbar = document.querySelector('.navbar')

  navbar.classList.toggle('mobile')
}

btnMenu.addEventListener('touchstart', showMenuMobile)
