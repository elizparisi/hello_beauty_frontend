const endPoint = 'http://localhost:3000/api/v1/products'

document.addEventListener('DOMContentLoaded', () => {
  getProducts()

  const createProductForm = document.querySelector('#create-product-form')

  createProductForm.addEventListener('submit', (event) => createFormHandler(event))
})

function getProducts() {
  fetch(endPoint)
  .then(response => response.json())
  .then(products => {
    // we don't want to console.log, we want to render the data
    // console.log(products);
    products.data.forEach (product => {
      // our data is nested- refer to json info to see how it's nested
      render(product)
    })
  .catch(error => console.log(error))
  })
}

function render(product) {
  const productInfo = `
    <div data-id=${product.id}>
      <h4>${product.attributes.name}</h4>
      <p>${product.attributes.category}</p>
      <p>${product.attributes.look.name}</p>
    </div>
    <br>
    <br>`;

    document.querySelector('#product-container').innerHTML += productInfo
}

function createFormHandler(event) {
  event.preventDefault()
  // const categoryId = parseInt(document.querySelector('#categories')
  const categoryInput = document.querySelector('#categories').value
  const categoryId = parseInt(categoryInput)
  const originalNameInput = document.querySelector('#original-name-input').value
  const originalPriceInput = document.querySelector('#original-price-input').value
  const originalImageInput = document.querySelector('#orginal-image-input').value
  const dupeNameInput = document.querySelector('#dupe-name-input').value
  const dupePriceInput = document.querySelector('#dupe-price-input').value
  const dupeImageInput = document.querySelector('#dupe-image-input').value

  postFetch(categoryInput, originalNameInput, originalPriceInput, originalImageInput, dupeNameInput, dupePriceInput, dupeImageInput)
}

function postFetch(look_id, category, name) {
  // console.log(look_id, category, name);--works as expected
  // make variable to hold body data, key + value are the same so only one is needed
  const bodyData = {look_id, category, name}
  fetch(endPoint, {
    // POST request
    method: "POST",
    headers: { "Content-Type": "application/json"},
    body: JSON.stringify(bodyData)
  })
  .then(response => response.json())
  .then(product => {
    // console.log(look);
    const productData = product.data
    // render JSON response
    // const productInfo =  `
    //   <div data-id=${product.id}>
    //     <h4>${product.attributes.name}</h4>
    //     <p>${product.attributes.category}</p>
    //     <p>${product.attributes.look.name}</p>
    //   </div>
    //   <br>
    //   <br>`;
    //
    //   document.querySelector('#product-container').innerHTML += productInfo
    render(productData)
  })
}
