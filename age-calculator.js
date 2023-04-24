function calculateAge() {
  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value);
  const year = parseInt(document.getElementById("year").value);

  const date = new Date(year, month - 1, day);
  const currentDate = new Date();
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
