class Product {

  constructor(product, productAttributes) {
    this.id = product.id
    this.original_name = productAttributes.original_name
    this.original_price = productAttributes.original_price
    this.original_image_url = productAttributes.original_image_url
    this.dupe_name = productAttributes.dupe_name
    this.dupe_price = productAttributes.dupe_price
    this.dupe_image_url = productAttributes.dupe_image_url
    this.category = productAttributes.category
    Product.all.push(this)
  }

  render() {
    // return `
    //   <div data-id=${this.id}>
    //     <p>${this.category.name}</p>
    //     <img src=${this.original_image_url} height='375' width='350'/>
    //     <h4>${this.original_name}</h4>
    //     <p>${this.original_price}</p>
    //     <br>
    //     <br>
    //     <img src=${this.dupe_image_url} height='375' width='350' />
    //     <h4>${this.dupe_name}</h4>
    //     <p>${this.dupe_price}</p>
    //   </div>`;
    return `
    <div class="row">
    <div class="col-sm-6">
      <div class="card">
        <div class="card shadow-sm">
          <img src=${this.original_image_url} class="card-img-top" alt="..." height='375' width='350'>
        <div class="card-body">
          <h5 class="card-title">${this.original_name}</h5>
          <p class="card-text">${this.original_price}</p>
          <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
          <small class="text-muted">Category: ${this.category.name}</small>
        </div>
      </div>
    </div>
    </div>
    <div class="col-sm-6">
      <div class="card">
        <div class="card shadow-sm">
          <img src=${this.dupe_image_url} class="card-img-top" alt="..." height='375' width='350'>
        <div class="card-body">
          <h5 class="card-title">${this.dupe_name}</h5>
          <p class="card-text">${this.dupe_price}</p>
          <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
          <small class="text-muted">Category: ${this.category.name}</small>
        </div>
      </div>
    </div>
  </div>
  </div>
    `
  }
}

Product.all = [];
