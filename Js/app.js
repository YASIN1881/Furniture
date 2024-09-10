const navBtn = document.querySelector('.nav__mobile')
const navItems = document.querySelector('.nav__items')

navBtn.addEventListener('click',function(){
    this.classList.toggle('mobile--open')
    navItems.classList.toggle('mobile-nav__items')
})