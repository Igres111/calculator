const numberA = document.querySelector(".input-a");
const numberB = document.querySelector(".input-b");
let button = document.querySelector(".button");
let goodResult = document.querySelector(".result-out");
let selector = document.querySelector(".selector");
let contentA = 0;
let contentB = 0;
numberA.addEventListener("input", function () {
  contentA = numberA.value;
});
numberB.addEventListener("input", function () {
  contentB = numberB.value;
});

function change() {
  if (numberA !== null) {
    return numberA.value;
  } else if (numberB !== null) {
    return numberB.value;
  } else {
    return "Error";
  }
}

button.addEventListener("click", function () {
  let a = Number(numberA);
  let b = Number(numberB);
  let operation = selector.value;
  let result = calculator({ a, b, operation });
  console.log(a, b, operation);
  selector.innerHTML = result;
});
