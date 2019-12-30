function Insurance(label, year, itype) {
  this.label = label;
  this.itype = itype;
  this.year = year;
}

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
