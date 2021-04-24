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
      // const productInfo = `
      //   <div data-id=${product.id}>
      //     <p>${product.attributes.category.name}</p>
      //     <img src=${product.attributes.original_image_url} height='200' width='250'/>
      //     <h4>${product.attributes.original_name}</h4>
      //     <p>${product.attributes.original_price}</p>
      //     <br>
      //     <br>
      //     <img src=${product.attributes.dupe_image_url} height='200' width='250' />
      //     <h4>${product.attributes.dupe_name}</h4>
      //     <p>${product.attributes.dupe_price}</p>
      //   </div>`;
      //
      //   document.querySelector('#product-container').innerHTML += productInfo
      let newProduct = new Product(product, product.attributes)

      document.querySelector('#product-container').innerHTML += newProduct.render()
      // render(product)
    })
  // .catch(error => console.log(error))
  })
}



// moved to product.js in Product class
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
  // we get this data after submit has been triggered
  const categoryId = parseInt(document.querySelector('#categories').value)
  const originalNameInput = document.querySelector('#original-name-input').value
  const originalPriceInput = document.querySelector('#original-price-input').value
  const originalImageInput = document.querySelector('#original-image-input').value
  const dupeNameInput = document.querySelector('#dupe-name-input').value
  const dupePriceInput = document.querySelector('#dupe-price-input').value
  const dupeImageInput = document.querySelector('#dupe-image-input').value
  postFetch(categoryId, originalNameInput, originalPriceInput, originalImageInput, dupeNameInput, dupePriceInput, dupeImageInput)
}

function postFetch(category_id, original_name, original_price, original_image_url, dupe_name, dupe_price, dupe_image_url) {
  // console.log(category_id, original_name, original_price, original_image_url, dupe_name, dupe_price, dupe_image_url);-works properly
  // make variable to hold body data, key + value are the same so only one is needed
  const bodyData = {category_id, original_name, original_price, original_image_url, dupe_name, dupe_price, dupe_image_url}

  fetch(endPoint, {
    // POST request
    method: "POST",
    headers: { "Content-Type": "application/json"},
    body: JSON.stringify(bodyData)
  })
  .then(response => response.json())
  .then(product => {
    // console.log(product);
    const productData = product.data
    // render JSON response
    // const productInfo = `
    //   <div data-id=${product.id}>
    //     <p>${productData.category.name}</p>
    //     <img src=${productData.original_image_url} height='200' width='250'/>
    //     <h4>${productData.original_name}</h4>
    //     <p>${productData.original_price}</p>
    //     <br>
    //     <br>
    //     <img src=${productData.dupe_image_url} height='200' width='250' />
    //       <h4>${productData.dupe_name}</h4>
    //       <p>${productData.dupe_price}</p>
    //   </div>
    //   <br>
    //   <br>`;
    //
    // document.querySelector('#product-container').innerHTML += productInfo
    // render(productData)
    let newProduct = new Product(productData, productData.attributes)

    document.querySelector('#product-container').innerHTML += newProduct.render()
  })
}
