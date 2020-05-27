const nav = document.querySelector('.nav-links')
const burger = document.querySelector('.burger')
const links = nav.querySelectorAll('a')

burger.addEventListener('click', () => {
  nav.classList.toggle('nav-open')
})
