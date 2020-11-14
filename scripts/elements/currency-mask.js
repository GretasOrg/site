// function CurrencyMask(element) {
//   console.log(element);
//   let digits = [];
//   const keys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
//   setTimeout(() => {
//     element.value = 45;
//   });
//   element.addEventListener("keydown", (ev) => {
//     if (keys.indexOf(ev.key) !== -1) {
//       digits.push(ev.key);
//     }
//     const result = fillWithZeros(digits);
//     result.splice(result.length - 2, 0, ",");
//     console.log(result);
//     console.log(result.join(""));
//     element.value = result.join("");
//     // ev.cancelBubble = true;
//     // ev.stopPropagation();
//   });

//   function fillWithZeros(digits) {
//     const result = [...digits];
//     for (let index = 0; index < 4 - digits.length; index++) {
//       result.unshift("0");
//     }
//     return result;
//   }
// }
