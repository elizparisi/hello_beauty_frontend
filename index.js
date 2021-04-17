const endPoint = 'http://localhost:3000/api/v1/products'

document.addEventListener('DOMContentLoaded', () => {
  getProducts()

  const createLookForm = document.querySelector('#create-look-form')

  createLookForm.addEventListener('submit', (event) => console.log(event))
})

function getProducts() {
  fetch(endPoint)
  .then(response => response.json())
  .then(products => {
    // we don't want to console.log, we want to render the data
    // console.log(products);
    products.data.forEach (product => {
      // our data is nested- refer to json info to see how it's nested
      const productInfo = `
        <div data-id=${product.id}>
          <h4>${product.attributes.name}</h4>
          <p>${product.attributes.category}</p>
          <p>${product.attributes.look.name}</p>
        </div>
        <br>
        <br>`;

        document.querySelector('#product-container').innerHTML += productInfo
    })
  })
}
