function appendToDisplay(value) {
  const display = document.querySelector('.display');
  if (display.value === "0") {
    display.value = value;
  } else {
    display.value += value;
  }
}

function clearDisplay() {
  const display = document.querySelector('.display');
  display.value = "0";
}

function clearLastElement() {
  const display = document.querySelector('.display');
  if (display.value.length > 1) {
    display.value = display.value.slice(0, -1);
  } else {
    display.value = "0";
  }
}

function calculateResult() {
  const display = document.querySelector('.display');
  try {
    const result = eval(display.value);
    display.value = result;
  } catch (error) {
    display.value = "Error";
  }
}