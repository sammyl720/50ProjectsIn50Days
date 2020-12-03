const btns = document.querySelectorAll('.faq-toggle')

btns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    btn.parentNode.classList.toggle('active')
  })
})