// Leap Year Checker
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// Event Listener for the Button
document.getElementById("button").addEventListener("click", function () {
  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value);
  const year = parseInt(document.getElementById("year").value);
  const gender = document.querySelector('input[name="gender"]:checked')?.value;

  // Leap year check
  const isLeap = isLeapYear(year);

  // Validation for day
  if (!day || day < 1 || day > 31) {
    alert("Please enter a valid day (1-31).");
    return;
  }

  // Validation for month
  if (!month || month < 1 || month > 12) {
    alert("Please enter a valid month (1-12).");
    return;
  }

  // Validation for year
  if (!year || year < 1900 || year > 2025) {
    alert("Please enter a valid year (1900-2025).");
    return;
  }

  // Validation for February (leap year adjustment)
  if (month === 2) {
    if (isLeap && day > 29) {
      alert("February in a leap year has only 29 days.");
      return;
    } else if (!isLeap && day > 28) {
      alert("February in a non-leap year has only 28 days.");
      return;
    }
  }

  // Validation for months with 30 days
  if ([4, 6, 9, 11].includes(month) && day > 30) {
    alert("The selected month has only 30 days.");
    return;
  }

  // Validation for gender
  if (!gender) {
    alert("Please select a gender.");
    return;
  }

  // Akan Name Calculation
  const century = Math.floor(year / 100) + 1; // Using (year / 100) + 1
  const yearOfCentury = year % 100;

  const dayOfWeek = Math.floor(
    (day +
      Math.floor(2.6 * (month - 2)) - // Do not adjust months
      2 * century +
      yearOfCentury +
      Math.floor(yearOfCentury / 4) +
      Math.floor(century / 4)) %
      7
  );

  // Akan Names
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

  // Get the Akan name based on gender
  const akanName =
    gender === "male" ? maleNames[dayOfWeek] : femaleNames[dayOfWeek];

  // Output the result
  const resultElement = document.getElementById("akan-name");
  resultElement.textContent = `Your Akan name is ${akanName}.`;
});
