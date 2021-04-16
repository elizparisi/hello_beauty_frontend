const endPoint = 'http://localhost:3000/api/v1/products'

document.addEventListener('DOMContentLoaded', () => {
  getProducts()
})

function getProducts() {
  fetch(endPoint)
  .then(response => response.json())
  .then(products => {
    // we don't want to console.log, we want to render the data
    // console.log(products);
    Products.data.forEach (product => {
      // our data is nested- refer to json info to see how it's nested
      const ProductInfo = `
        <div data-id=${product.id}>
          <h4>${product.attributes.name}</h4>
          <p>${product.attributes.category}</p>
          <p>${product.attributes.look.name}</p>
        </div>
        <br>
        <br>`;
    })
  })
}
