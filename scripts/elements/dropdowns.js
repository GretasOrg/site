const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("click", (e) => {
    if (dropdown.classList.contains("closed")) {
      dropdown.classList.remove("closed");
    } else {
      dropdown.classList.add("closed");
    }
  });
});
