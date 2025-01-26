document.getElementById("button") .addEventListener("click", function()) {

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

const century = Math.floor((year / 100) + 1);
const yearOfCentury = year % 100;
const dayOfWeek = Math.floor(
  (day +
    Math.floor(2.6 * ((month < 3 ? month + 12 : month) - 2)) -
    2 * century +
    yearOfCentury +
    Math.floor(yearOfCentury / 4) +
    Math.floor(century / 4)) %
    7
);

  

}