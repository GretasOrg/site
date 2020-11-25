(function () {
  const meals = document.querySelectorAll(".meals__item");
  meals.forEach((meal) => {
    const dropdown = meal.querySelector(".dropdown");
    const link = meal.querySelector(".meals__item-button a");

    const plan = meal.getAttribute("data-plan");

    dropdown &&
      dropdown.addEventListener("dropdown::select", (ev) => {
        const frequency = ev.detail.value;
        meal.setAttribute("data-frequency", frequency);
        const price = meal.getAttribute("data-price");
        const newLink = `https://gretas.faturasimples.com.br/contratar/gretas?plano=${plan}&valor=${price}.00&recorrencia=${frequency}`;
        link.href = newLink;
      });
  });
})();

(async function () {
  document.addEventListener("DOMContentLoaded", (ev) => {
    const planInputEl = document.querySelector(
      ".meals__item-price .price.input"
    );
    const mealEl = document.querySelector("#mealCustom");
    const link = mealEl.querySelector(".meals__item-button a");
    const plan = mealEl.getAttribute("data-plan");

    planInputEl.addEventListener("change", (ev) => {
      const frequency = mealEl.getAttribute("data-frequency");
      const price = ev.target.value;
      mealEl.setAttribute("data-price", price);

      const newLink = `https://gretas.faturasimples.com.br/contratar/gretas?plano=${plan}&valor=${price}.00&recorrencia=${frequency}`;
      link.href = newLink;
    });
    planInputEl.addEventListener("focus", (_) => {
      planInputEl.value = "";
    });
  });
})();

// (async function () {
//   document.addEventListener("DOMContentLoaded", (ev) => {
//   });
// })();
