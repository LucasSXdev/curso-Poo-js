import { Component } from "./componet.js";

export class Label extends Component {
  constructor(text, parent, options) {
    super("label", parent, Object.assign({}, options, { textContent: text }));
  }
}
