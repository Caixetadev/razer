const open = document.querySelectorAll('#open');

open.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    event.preventDefault()
    btn.classList.add('show')
    const index = btn.getAttribute(`data-id`)
    const { name, img, desc, preco, stars, id } = produtos[index]
    document.querySelector('#modal').innerHTML = `
      <div class="modal" id="show">
      <i id="close" class="fas fa-times"></i>
        <h1>${name}</h1>
        <div class="content">
        <img src="${img}">
        <p>${desc}</p>
        <h2>${preco}</h2>
        </div>
        <a id="animation" href="#">Comprar</a>
      </div>`
      const close = document.getElementById('close');
      close.addEventListener('click', () => {
        document.querySelector('#modal').innerHTML = ` `
      });
      const anima = document.getElementById('animation')
      anima.addEventListener('click', (event) => {
        event.preventDefault()
        document.querySelector('#modal').innerHTML = `
        <div class="purchase">
        <img src="./img/compra.png" class="modalImg">
        </div>
        `
      })
  })
  
})