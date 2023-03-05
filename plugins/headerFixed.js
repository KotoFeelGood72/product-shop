function headerFixedScroll() {
  let headerNav = document.querySelector('.header_main--bottom')
  let positionSticky = window.pageYOffset;



if(positionSticky > 60) {
  headerNav.classList.add('position-fixed')
} else {
  headerNav.classList.remove('position-fixed')
}
}

window.addEventListener('scroll', () => {

  headerFixedScroll();
})


