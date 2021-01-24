(function () {
  "use strict";

  var template = document.createElement("template");
  template.innerHTML = `
  <style>
  </style>
  <article class="c-highlightedText">
    <h1 class="c-highlightedText__text"></h1>
    <text-highlight-svg class="c-highlightedText__bg"></text-highlight-svg>
  </article>
`;

  class TextHighlight extends HTMLElement {
    constructor() {
      super();

      // this._shadow = this.attachShadow({ mode: "open" });
      // this._shadow.appendChild(template.content.cloneNode(true));
      this.appendChild(template.content.cloneNode(true));
      const text = this.getAttribute("text");
      const color = this.getAttribute("color");

      const bgEl = this.querySelector(".c-highlightedText__bg");
      const textEl = this.querySelector(".c-highlightedText__text");

      textEl.innerHTML = text;

      if (color === "warning") {
        bgEl.classList.add(`c-highlightedText__bg-warning`);
      } else if (color === "faded") {
        bgEl.classList.add(`c-highlightedText__bg-faded`);
      } else if (color === "faded-dark") {
        bgEl.classList.add(`c-highlightedText__bg-faded-dark`);
      }
    }
  }
  customElements.define("text-highlight", TextHighlight);
})();
