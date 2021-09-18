const modal = () => {
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
          <div class="carrinho">
          <a href="#" id="carrinho">Carrinho</a>
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

        const carrinho = document.querySelector('#carrinho')
        carrinho.addEventListener('click', (event) => {
          event.preventDefault()
          document.querySelector('#modalcar').innerHTML = `
          <section class="modalcar-container" id="show">
          <h2>Carrinho de compras</h2>
          <div class="table-container">
            <table>
              <tr>
                <th>Producto</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
                <th>IconDelete</th>
              </tr>
              <tr>
                <th>example</th>
                <th>example</th>
                <th>example</th>
                <th>example</th>
                <th>example</th>
                <th>example</th>
      
              </tr>
             
            </table>
      
            <div class="buttons-container">
              <button id="close2" type="button">Volver</button>
              <button class="btn2">Comprar</button>
              <h5 class="total">Total: $</h5>
            </div>
          
      
          </div>
          </section>
           `
          
           const close2 = document.getElementById('close2');
           close2.addEventListener('click', () => {
             document.querySelector('#modalcar').innerHTML = ` `
           });
          //  const close = document.getElementById('close');
          //  close.addEventListener('click', () => {
          //    document.querySelector('#modalcar').innerHTML = ` `
          //  });
          
        })

        const opencar = document.querySelector('#opencar')
        opencar.addEventListener('click', (event) => {
          event.preventDefault()
          document.querySelector('#modalcar').innerHTML = `
          <section class="modalcar-container" id="show">
          <h2>Carrinho de compras</h2>
          <div class="table-container">
            <table>
              <tr>
                <th>Producto</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
                <th>IconDelete</th>
              </tr>
              <tr>
                <th>example</th>
                <th>example</th>
                <th>example</th>
                <th>example</th>
                <th>example</th>
                <th>example</th>
      
              </tr>
             
            </table>
      
            <div class="buttons-container">
              <button id="close2" type="button">Volver</button>
              <button class="btn2">Comprar</button>
              <h5 class="total">Total: $</h5>
            </div>
          
      
          </div>
          </section>
           `
          
           const close2 = document.getElementById('close2');
           close2.addEventListener('click', () => {
             document.querySelector('#modalcar').innerHTML = ` `
           });
          //  const close = document.getElementById('close');
          //  close.addEventListener('click', () => {
          //    document.querySelector('#modalcar').innerHTML = ` `
          //  });
          
        })
  })
  
  })
}