(function () {
  const DROPDOWN_SELECTOR = ".dropdown";
  const DROPDOWN_CLOSED_CLASS = "closed";
  const OPTION_SELECTOR = ".dropdown__option";
  const OPTION_SELECTED_CLASS = "selected";
  const SELECTED_OPTION_SELECTOR = ".dropdown__selected";
  const VALUE_ATTRIBUTE = "data-value";

  const dropdowns = document.querySelectorAll(DROPDOWN_SELECTOR);

  dropdowns.forEach((dropdown) => {
    const options = dropdown.querySelectorAll(OPTION_SELECTOR);
    const selectedOption = dropdown.querySelector(SELECTED_OPTION_SELECTOR);
    const menu = dropdown.querySelector(".dropdown__menu");

    dropdown.addEventListener("click", (e) => {
      toggleDropdown(dropdown);
    });
    menu.addEventListener("mouseleave", (e) => {
      closeDropdown(dropdown);
    });
    options.forEach((option) => {
      option.addEventListener("click", (e) => {
        selectOption(options, option);
        selectedOption.innerHTML = option.innerHTML;
        const value = option.getAttribute(VALUE_ATTRIBUTE);
        selectedOption.setAttribute(VALUE_ATTRIBUTE, value);

        const selectedEvent = new CustomEvent("dropdown::select", {
          detail: { value },
        });
        dropdown.dispatchEvent(selectedEvent);
      });
    });
  });

  function closeDropdown(dropdown) {
    dropdown.classList.add(DROPDOWN_CLOSED_CLASS);
  }
  function openDropdown(dropdown) {
    dropdown.classList.remove(DROPDOWN_CLOSED_CLASS);
  }
  function toggleDropdown(dropdown) {
    if (dropdown.classList.contains(DROPDOWN_CLOSED_CLASS)) {
      openDropdown(dropdown);
    } else {
      closeDropdown(dropdown);
    }
  }

  function unselectOption(option) {
    option.classList.remove(OPTION_SELECTED_CLASS);
  }
  function selectOption(options, option) {
    options.forEach(unselectOption);
    option.classList.add(OPTION_SELECTED_CLASS);
  }
})();
