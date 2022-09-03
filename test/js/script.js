const toggle = document.getElementsByClassName("toggle")

toggle[0].addEventListener('click', function(){
    this.classList.toggle('change')
   const menu = document.getElementsByClassName('list-menu')
  menu[0].classList.toggle('menu-active')
})