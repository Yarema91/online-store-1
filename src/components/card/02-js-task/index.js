export default class Card {
  constructor(product) {
    this.componentProduct = product;
    this.myRender();

  }
  getTemplate() {
    return `
    <div class="os-product-card">
        <div
          class="os-product-img"
          style="
            background-image: url(${this.componentProduct.images[0]})
          "
        ></div>

        <div class="os-product-content">
          <div class="os-product-price-wrapper">
            <div class="os-product-rating">
              <span>${this.componentProduct.rating}</span>
              <i class="bi bi-star">&nbsp;</i>
            </div>

            <div class="os-product-price">
            ${this.componentProduct.price}
            </div>
          </div>

          <h5 class="os-product-title">
            ${this.componentProduct.title}
          </h5>
          <p class="os-product-description">${this.componentProduct.category}</p>
        </div>

        <footer class="os-product-footer">
          <button class="os-btn-primary" data-element="addToCartBtn">
            Add To Cart
          </button>
        </footer>
      </div>
    `;
  }
  myRender() {
    const div = document.createElement('div');
    div.innerHTML = this.getTemplate();
    this.element = div;

  }

}
