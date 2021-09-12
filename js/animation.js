const text = document.querySelector('.animation')
console.log(text)

function textWrite(e) {
  const textArray = e.innerHTML.split('')
  e.innerHTML = ''
  textArray.forEach((letra, i) => {
    setTimeout(() => {
      e.innerHTML += letra
    }, 75 * i)
  })
}


textWrite(text)