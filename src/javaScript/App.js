
hamburger_btn = document.querySelector (".nav__button")
nav = document.querySelector (".nav")

hamburger_btn.addEventListener ("click", event => {
  if (Array.from (nav.classList).includes ("nav_active")) {
    nav.classList.remove ("nav_active")
  
    nav.classList.add ("nav_inactive")
    document.body.style.overflow = "overlay"
  } else {
    nav.classList.remove ("nav_inactive")

    nav.classList.add ("nav_active")
    document.body.style.overflow = "hidden"
  }
})
