export default class Card {
  constructor(product) {
    this.componentProduct = product;
    this.myRender();

  }
  getTemplate() {
    return `
    <div class="card">
    <img class="card-image" src=${this.componentProduct.images[0]} alt="image">
    <div class="card-head">
      <div class="card-rating button-text ">
        <span>${this.componentProduct.rating}</span>
        <a><i class="bi bi-star">&nbsp;</i></a>
      </div>
      <div class="price">${this.componentProduct.price}</div>
    </div>
    <div class="card-body">
      <span class="card-text">${this.componentProduct.title}</span>
      <p class="article">${this.componentProduct.category}</p>
    </div>
    <button class="button button-text">Add To Cart</button>
  </div>
    `;
  }
  myRender() {
    const div = document.createElement('div');
    div.innerHTML = this.getTemplate();
    this.element = div;

  }
}
