document.getElementById("button").addEventListener("click", function () {
  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value);
  const year = parseInt(document.getElementById("year").value);
  const gender = document.querySelector('input[name="gender"]:checked')?.value;

  if (!day || day < 1 || day > 31) {
    alert("Please enter a valid day (1-31).");
    return;
  }
  if (!month || month < 1 || month > 12) {
    alert("Please enter a valid month (1-12).");
    return;
  }
  if (!year || year < 1900 || year > 2025) {
    alert("Please enter a valid year (1900-2025).");
    return;
  }
  if (!gender) {
    alert("Please select a gender.");
    return;
  }

  const century = Math.floor(year / 100 + 1);
  const yearOfCentury = year % 100;
  const adjustedMonth = month < 3 ? month + 12 : month;
  const dayOfWeek =
    (day +
      Math.floor(2.6 * (adjustedMonth - 2)) -
      2 * century +
      yearOfCentury +
      Math.floor(yearOfCentury / 4) +
      Math.floor(century / 4)) %
    7;

  const dayIndex = (dayOfWeek + 1 + 7) % 7;

  const maleNames = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame",
  ];
  const femaleNames = [
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama",
  ];

  const akanName =
    gender === "male" ? maleNames[dayIndex] : femaleNames[dayIndex];

  const resultElement = document.getElementById("akan-name");
  resultElement.textContent = `Your Akan name is ${akanName}.`;
});
