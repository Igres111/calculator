const numberA = document.querySelector("input-a");
const numberB = document.querySelector("input-b");
const button = document.querySelector("button");
const goodResult = document.querySelector("result-out");
const selector = document.querySelector("selector");

button.addEventListener("click", function () {
  const a = Number(numberA.value);
  const b = Number(numberB.value);
  const operation = selector.value;
  const result = calculator({ a, b, operation });

  selector.innerHTML = result;
});
