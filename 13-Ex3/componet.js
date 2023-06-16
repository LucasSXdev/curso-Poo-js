export class Component {
  #element = null;

  constructor(tag, parent, options) {
    this.tag = tag;
    this.parent = parent;
    this.options = options;
    this.build();
  }

  build() {
    this.#element = document.createElement(this.tag);
    Object.assign(this.#element, this.options); //Essa função faz com que o segundo parâmetro seja atribuído ao primeiro parametro
    return this;
  }

  getElement() {
    return this.#element;
  }

  render() {
    if (this.parent instanceof Component) {
      this.parent.getElement().append(this.#element);
    } else {
      document.querySelector(this.parent).append(this.#element);
    }
  }
}
