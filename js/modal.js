const open = document.querySelectorAll('#open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

open.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    modal_container.classList.add('show');
    event.preventDefault()
  })
})

close.addEventListener('click', () => {
  modal_container.classList.remove('show');
});