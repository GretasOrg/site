(function () {
  "use strict";

  var template = document.createElement("template");
  template.innerHTML = `
  <article class="c-stats">
    <span class="c-stats__number"
      >
      <stats-highlight-svg class="c-stats__bg"></stats-highlight-svg>
    </span>
    <span class="c-stats__text"
      ></span
    >
  </article>
`;

  class StatsHighlight extends HTMLElement {
    constructor() {
      super();

      const text = this.innerHTML;
      this.innerHTML = "";
      this.appendChild(template.content.cloneNode(true));
      const color = this.getAttribute("color");
      const number = this.getAttribute("number");

      const bgEl = this.querySelector(".c-stats__bg");
      const textEl = this.querySelector(".c-stats__text");
      const numberEl = this.querySelector(".c-stats__number");

      textEl.innerHTML = text;
      numberEl.appendChild(document.createTextNode(number));

      if (color === "success") {
        bgEl.classList.add(`c-stats__bg-success`);
      } else if (color === "faded") {
        bgEl.classList.add(`c-stats__bg-faded`);
      } else if (color === "faded-dark") {
        bgEl.classList.add(`c-stats__bg-faded-dark`);
      } else if (color === "faded-danger") {
        bgEl.classList.add(`c-stats__bg-faded-danger`);
      } else if (color === "tertiary") {
        bgEl.classList.add(`c-stats__bg-tertiary`);
      } else if (color === "danger") {
        bgEl.classList.add(`c-stats__bg-danger`);
      }
    }
  }
  customElements.define("stats-highlight", StatsHighlight);
})();
