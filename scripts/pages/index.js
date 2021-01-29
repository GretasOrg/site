(function () {
  const donations = document.querySelectorAll(".c-donation");
  donations.forEach((donation) => {
    const dropdown = donation.querySelector(".c-donation .c-dropdown");
    const link = donation.querySelector(".c-donation__action");

    const plan = donation.getAttribute("data-plan");

    dropdown &&
      dropdown.addEventListener("dropdown::select", (ev) => {
        const frequency = ev.detail.value;
        donation.setAttribute("data-frequency", frequency);
        const price = donation.getAttribute("data-price");
        const newLink = `https://gretas.faturasimples.com.br/contratar/gretas?plano=${plan}&valor=${price}.00&recorrencia=${frequency}`;
        link.href = newLink;
      });
  });
})();

(async function () {
  document.addEventListener("DOMContentLoaded", (ev) => {
    const planInputEl = document.querySelector("#donationCustom .c-donation__input");
    const donationEl = document.querySelector("#donationCustom");
    const link = donationEl.querySelector(".c-donation__action");
    const plan = donationEl.getAttribute("data-plan");

    planInputEl.addEventListener("change", (ev) => {
      const frequency = donationEl.getAttribute("data-frequency");
      const price = ev.target.value;
      donationEl.setAttribute("data-price", price);

      const newLink = `https://gretas.faturasimples.com.br/contratar/gretas?plano=${plan}&valor=${price}&recorrencia=${frequency}`;
      link.href = newLink;
    });
    planInputEl.addEventListener("focus", (_) => {
      planInputEl.value = "";
    });
  });
})();
