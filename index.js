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
      const productInfo = `
        <div data-id=${product.id}>
          <p>${product.attributes.category.name}</p>
          <img src=${product.attributes.original_image_url} height='200' width='250'/>
          <h4>${product.attributes.original_name}</h4>
          <p>${product.attributes.original_price}</p>
          <br>
          <br>
          <img src=${product.attributes.dupe_image_url} height='200' width='250' />
          <h4>${product.attributes.dupe_name}</h4>
          <p>${product.attributes.dupe_price}</p>
        </div>`;

        document.querySelector('#product-container').innerHTML += productInfo
      // render(product)
    })
  // .catch(error => console.log(error))
  })
}

// function render(product) {
//   const productInfo = `
//     <div data-id=${product.id}>
//       <p>${product.attributes.category.name}</p>
//       <p>${product.attributes.original_product_image_url}</p>
//       <h4>${product.attributes.original_name}</h4>
//       <p>${product.attributes.original_price}</p>
//       <br>
//       <p>${product.attributes.dupe_product_image_url}</p>
//       <h4>${product.attributes.dupe_name}</h4>
//       <p>${product.attributes.dupe_price}</p>
//     </div>
//     <br>
//     <br>;`
//
//     document.querySelector('#product-container').innerHTML += productInfo
// }

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

// function postFetch(category_id, original_product_name, original_product_price, original_product_image_url, dupe_product_name, dupe_product_price, dupe_product_image_url) {
//   console.log(category_id, original_product_name, original_product_price, original_product_image_url, dupe_product_name, dupe_product_price, dupe_product_image_url);
//   // make variable to hold body data, key + value are the same so only one is needed
//   // const bodyData = {category_id, category, name}
//   // fetch(endPoint, {
//   //   // POST request
//   //   method: "POST",
//   //   headers: { "Content-Type": "application/json"},
//   //   body: JSON.stringify(bodyData)
//   // })
//   // .then(response => response.json())
//   // .then(product => {
//   //   const productData = product.data
//   //   // OLD INFO render JSON response
//   //   // const productInfo =  `
//   //   //   <div data-id=${product.id}>
//   //   //     <h4>${product.attributes.name}</h4>
//   //   //     <p>${product.attributes.category}</p>
//   //   //     <p>${product.attributes.look.name}</p>
//   //   //   </div>
//   //   //   <br>
//   //   //   <br>`;
//   //   //
//   //   //END OLD INFO  document.querySelector('#product-container').innerHTML += productInfo
//   //   render(productData)
//   // })
// }
