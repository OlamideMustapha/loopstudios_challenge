
hamburger_btn = document.querySelector (".menu-btn")
header = document.querySelector (".header")

hamburger_btn.addEventListener ("click", event => {
  if (Array.from (header.classList).includes ("active")) {
    header.classList.remove ("active")
    header.classList.add ("inactive")
    document.body.style.overflow = "overlay"
  } else {
    header.classList.remove ("inactive")
    header.classList.add ("active")
    document.body.style.overflow = "hidden"
  }
})
