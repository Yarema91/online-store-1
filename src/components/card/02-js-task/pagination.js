export default class Pagination {

  constructor(pages) {
    this.defaultPageSize = 12;
    // console.error(this.defaultPageSize);
    this.state = pages;
    this.render(pages);

  }


  getTemplate() {
    return `
    <li class="page previous-page">
    <i class="bi bi-chevron-left"></i>
  </li>
  ${this.getPages()}
  <li class="page next-page">
    <i class="bi bi-chevron-right"></i>
  </li>


    `;
  }

  getPages() {
    return `
    <ul class="pagination">
    ${new Array(this.defaultPageSize).fill(1).map((item, index) => this.getPageTemplate(index)).join('')}
    </ul>
    `;
  }

  getPageTemplate(pageIndex = 0) {
    return `
   <li><a href="#" class="page data-index="${pageIndex}" active">${pageIndex + 1}</a></li>
    `;
  }

  render() {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = this.getTemplate();
    this.element = wrapper;
  }
};
