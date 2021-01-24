(function () {
  document.addEventListener("DOMContentLoaded", (ev) => {
    const menuBtnEl = document.querySelector(".c-menu__btn");
    const mobileMenuEl = document.querySelector(".c-mobileMenu");
    let isOpen = false;

    menuBtnEl.addEventListener("click", () => {
      isOpen = !isOpen;
      if (isOpen) {
        mobileMenuEl.classList.add("js-open");
        menuBtnEl.classList.add("js-open");
      } else {
        mobileMenuEl.classList.remove("js-open");
        menuBtnEl.classList.remove("js-open");
      }
    });
  });
})();
