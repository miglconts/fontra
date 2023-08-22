import { SimpleElement } from "/core/unlit.js";

export default class Panel extends SimpleElement {
  constructor(editorController) {
    super();
    this.editorController = editorController;
    this.contentElement = this.getContentElement();
    this.shadowRoot.appendChild(this.contentElement);
  }

  getContentElement() {}

  attach() {}
}

customElements.define("fontra-panel", Panel);
