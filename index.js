const endPoint = 'http://localhost:3000/api/v1/products'

document.addEventListener('DOMContentLoaded', () => {
  getProducts()
})

function getProducts() {
  fetch(endPoint)
  .then(response => response.json())
  .then(products => {
    console.log(products);
  })
}
