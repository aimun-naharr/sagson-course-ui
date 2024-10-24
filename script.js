const addToCart = document.getElementById('add-to-cart-btn')
const cartModal = document.querySelector('.modal')
addToCart.onclick = () => {
  cartModal.classList.remove('modal-close')

  cartModal.classList.add('modal-open')
}
const modalClose = () => {
  const cartModalCard = cartModal.querySelector('.modal-inner')
  console.log(cartModalCard)
  // cartModalCard.style.transform = 'scale(0)'

  cartModal.classList.remove('modal-open')


  cartModal.classList.add('modal-close')

}