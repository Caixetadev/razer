const content = document.querySelectorAll('.btn')

content.forEach((btn) => {
  btn.addEventListener('click', () => {
    alert('ola')
  })
})