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
    return `
      <div data-id=${this.id}>
        <p>${this.category.name}</p>
        <img src=${this.original_image_url} height='375' width='350'/>
        <h4>${this.original_name}</h4>
        <p>${this.original_price}</p>
        <br>
        <br>
        <img src=${this.dupe_image_url} height='375' width='350' />
        <h4>${this.dupe_name}</h4>
        <p>${this.dupe_price}</p>
      </div>`;
  }
}

Product.all = [];
