produtos.forEach((item) => {
  document.querySelector('.containerCard').innerHTML += `
  
  <div class="card">
  <div class="image">
    <img src="${item.img}" alt="">
  </div>
  <div class="textCard">
    <h1>${item.name}</h1>
    <p>${item.desc}</p>
  </div>
  <div class="preco">
    <p><b>${item.preco}</b></p>
  </div>
  <div class="stars">
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
  </div>
  <a href="#" id="open" class="btn">Comprar</a>
</div>

  `
})