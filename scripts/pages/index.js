(function () {
  const meals = document.querySelectorAll(".meals__item");
  meals.forEach((meal) => {
    const dropdown = meal.querySelector(".dropdown");
    const link = meal.querySelector(".meals__item-button a");

    const plan = meal.getAttribute("data-plan");
    const price = meal.getAttribute("data-price");

    dropdown &&
      dropdown.addEventListener("dropdown::select", (ev) => {
        const frequency = ev.detail.value;
        const newLink = `https://gretas.faturasimples.com.br/contratar/gretas?plano=${plan}&valor=${price}.00&recorrencia=${frequency}`;
        link.href = newLink;
      });
  });
})();
