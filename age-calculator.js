function calculateAge() {
  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value);
  const year = parseInt(document.getElementById("year").value);

  const currentDate = new Date();

  const dayInputElement = document.getElementById("day-input-element");
  const monthInputElement = document.getElementById("month-input-element");
  const yearInputElement = document.getElementById("year-input-element");

  // Clear any previous error messages
  clearErrorMessages(dayInputElement);
  clearErrorMessages(monthInputElement);
  clearErrorMessages(yearInputElement);

  if (day < 1 || day > 31) {
    const dayErrorText = document.createElement("p");
    dayErrorText.textContent = "Must be a valid day";
    dayInputElement.appendChild(dayErrorText);
    return;
  }

  if (month < 1 || month > 12) {
    const monthErrorText = document.createElement("p");
    monthErrorText.textContent = "Must be a valid month";
    monthInputElement.appendChild(monthErrorText);
    return;
  }

  if (year > currentDate.getFullYear()) {
    const yearErrorText = document.createElement("p");
    yearErrorText.textContent = "Must be in the past";
    yearInputElement.appendChild(yearErrorText);
    return;
  }

  const date = new Date(year, month - 1, day);
  const difference = currentDate.getTime() - date.getTime();

  const age = {};
  age.years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
  age.months = Math.floor(
    (difference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
  );
  age.days = Math.floor(
    (difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
  );

  document.getElementById("age-years").textContent = age.years;
  document.getElementById("age-months").textContent = age.months;
  document.getElementById("age-days").textContent = age.days;
}

function clearErrorMessages(inputElement) {
  const errorMessages = inputElement.querySelectorAll("p");
  errorMessages.forEach((errorMessage) => errorMessage.remove());
}

// function calculateAge() {
//   const day = parseInt(document.getElementById("day").value);
//   const month = parseInt(document.getElementById("month").value);
//   const year = parseInt(document.getElementById("year").value);

//   if (day < 1 || day > 31) {
//     const dayErrorText = document.createElement("p");
//     dayErrorText.textContent = "Must be a valid day";
//     document.getElementById("day-input-element").appendChild(dayErrorText);
//     return;
//   }

//   if (month < 1 || month > 12) {
//     const monthErrorText = document.createElement("p");
//     monthErrorText.textContent = "Must be a valid month";
//     document.getElementById("month-input-element").appendChild(monthErrorText);
//     return;
//   }

//   if (year > currentDate.getFullYear()) {
//     const yearErrorText = document.createElement("p");
//     yearErrorText.textContent = "Must be in the past";
//     document.getElementById("year-input-element").appendChild(yearErrorText);
//     return;
//   }

//   const date = new Date(year, month - 1, day);
//   const currentDate = new Date();
//   const difference = currentDate.getTime() - date.getTime();

//   const age = {};
//   age.years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
//   age.months = Math.floor(
//     (difference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
//   );
//   age.days = Math.floor(
//     (difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
//   );

//   document.getElementById("age-years").textContent = age.years;
//   document.getElementById("age-months").textContent = age.months;
//   document.getElementById("age-days").textContent = age.days;
// }
