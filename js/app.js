function Insurance() {}
//Generate years to calculate
const maxYear = new Date().getFullYear(),
  minYear = maxYear - 20;

const select = document.getElementById("years");
console.log(select);

for (let year = maxYear; year >= minYear; year--) {
  let option = document.createElement("option");
  option.innerHTML = year;
  select.appendChild(option);
}
