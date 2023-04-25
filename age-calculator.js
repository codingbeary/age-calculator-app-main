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

  let dayError = "";
  let monthError = "";
  let yearError = "";

  if (isNaN(day) || day < 1 || day > 31) {
    dayError = "Must be a valid day";
    document.getElementById("day").classList.add("error");
    document.getElementById("label-error").classList.add("label-error");
  }

  if (isNaN(month) || month < 1 || month > 12) {
    monthError = "Must be a valid month";
    document.getElementById("month").classList.add("error");
    document.getElementById("label-error").classList.add("label-error");
  }

  if (isNaN(year) || year > currentDate.getFullYear()) {
    yearError = "Must be in the past";
    document.getElementById("year").classList.add("error");
  }

  document.getElementById("day-error").textContent = dayError;
  document.getElementById("month-error").textContent = monthError;
  document.getElementById("year-error").textContent = yearError;

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
