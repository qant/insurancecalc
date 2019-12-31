/**
 *
 * @param {string} label
 * @param {string} year
 * @param {int} type
 */
function Insurance(label, year, type) {
  this.label = label;
  this.year = year;
  this.type = type;
}

Insurance.prototype.calculate = function() {
  const base = 2000;
  let total;

  switch (this.label) {
    case "1": //americ
      total = base * 1.15;
      break;
    case "2": //asiat
      total = base * 1.05;
      break;
    case "3": //euro
      total = base * 1.3;
      break;
  }

  const diff = new Date().getFullYear() - this.year;
  total = total - (diff * 3) / 100; //3% by year

  if ("basico" === this.type) {
    total = total * 1.3;
  } else {
    total = total * 1.5;
  }

  return total;
};

//To show
function Interface() {}

Interface.prototype.showError = function(msg, msgClass) {
  const messageBlock = document.createElement("div");
  messageBlock.classList = msgClass;
  messageBlock.innerHTML = `${msg}`;
  form.insertBefore(messageBlock, document.querySelector(".form-group"));

  if ("error" === msgClass) {
    setTimeout(function() {
      document.querySelector("." + msgClass).remove();
    }, 3000);
  }
};

//events
const form = document.getElementById("cotizar-seguro");
form.addEventListener("submit", calcualteBtnAction);

function calcualteBtnAction(event) {
  event.preventDefault();
  const label = document.getElementById("marca");
  const selectedL = label.options[label.selectedIndex].value;

  const years = document.getElementById("years");
  const selectedY = years.options[years.selectedIndex].value;

  const selectedT = document.querySelector('input[name="tipo"]:checked').value;

  const interface = new Interface();

  if (selectedL === "" || selectedT === "" || selectedY === "") {
    console.error("Data miss");
    interface.showError("Check fields", "error");
  } else {
    console.info("All fine created interface");
    interface.showError("Fields are OK, calculating...", "correcto");
    const insurance = new Insurance(selectedL, selectedY, selectedT);
    const total = insurance.calculate();
    console.log(total);
  }
}

//Generate years to calculate
const maxYear = new Date().getFullYear(),
  minYear = maxYear - 20;
const select = document.getElementById("years");
for (let year = maxYear; year >= minYear; year--) {
  let option = document.createElement("option");
  option.innerHTML = year;
  select.appendChild(option);
}
