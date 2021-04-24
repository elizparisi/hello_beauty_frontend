class Product {

  constructor(data) {
    this.id = data.id
    this.original_name = data.original_name
    this.original_price = data.original_price
    this.original_image_url = data.original_image_url
    this.dupe_name = data.dupe_name
    this.dupe_price = data.dupe_price
    this.dupe_image_url = data.dupe_image_url
    this.category = data.category
  }
}
