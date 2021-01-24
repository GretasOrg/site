(function () {
  "use strict";

  var template = document.createElement("template");
  template.innerHTML = `
  <style>
    svg {
      width: 100%;
      height: 100%;
    }
  </style>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="597.562"
    height="64.352"
    viewBox="0 0 597.562 64.352"
    preserveAspectRatio="none"
  >
    <path
      class="a"
      d="M788.839,3702c77.587,1.548,154.953-2.862,232.468-3.824,38.806-.482,77.734-.34,116.538.19,38.364.524,76.553,2.63,114.9,3.314,44.079.785,88.186.332,132.276.32.782,0,.778-60,0-60-38.939.011-77.887.365-116.822-.093-38.95-.459-77.708-2.588-116.632-3.319-77.157-1.451-154.122-.149-231.184,2.044-43.815,1.246-87.675,2.243-131.542,1.368.438.009-2,59.96,0,60"
      transform="translate(-788.041 -3637.98)"
    />
  </svg>
`;

  class TextHighlightSVG extends HTMLElement {
    constructor() {
      super();

      this._shadow = this.attachShadow({ mode: "open" });
      this._shadow.appendChild(template.content.cloneNode(true));
    }
  }
  customElements.define("text-highlight-svg", TextHighlightSVG);
})();
