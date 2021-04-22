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
  const lookId = parseInt(document.querySelector('#looks').value)
  const categoryInput = document.querySelector('.category-input').value
  const nameInput = document.querySelector('.name-input').value
  postFetch(lookId, categoryInput, nameInput)
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
