const button = document.querySelector('#enviar')

button.addEventListener('click', (event) => {
  event.preventDefault()
  const input = document.querySelector('#input').value
  console.log(input)

})