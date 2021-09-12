produtos.forEach((item, index) => {
  let stars = ``
  for(let i = 0; i < item.stars; i++){
    stars += `<i class="fas fa-star"></i>`
  }
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
    ${stars}
  </div>
  <a href="#" id="open" data-id="${index}" class="btn">Comprar</a>
</div>
  `
  
})