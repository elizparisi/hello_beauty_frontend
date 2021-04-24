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
  }
}
