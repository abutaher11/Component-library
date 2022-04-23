const btnBaseline = document.getElementById("btn-baseline");
const btnLeading = document.getElementById("btn-leading");
const btnStacked = document.getElementById("btn-stacked");
const baselineBar = document.querySelector(".baseline");
const leadingBar = document.querySelector(".leading");
const stackedBar = document.querySelector(".stacked");

const closeStackedBtn = document.querySelector(".stacked-close-btn");
const closeBaselineBtn = document.querySelector(".baseline-close-btn");
const closeLeadingBtn = document.querySelector(".leading-close-btn");

btnBaseline.addEventListener("click", baselineToggle);
btnLeading.addEventListener("click", leadingToggle);
btnStacked.addEventListener("click", stackedToggle);

closeStackedBtn.addEventListener("click", closeStacked);
closeBaselineBtn.addEventListener("click", closeBaseline);
closeLeadingBtn.addEventListener("click", closeLeading);

function baselineToggle() {
  baselineBar.style.visibility = "visible";
  setTimeout(() => {
    baselineBar.style.visibility = "hidden";
  }, 5000);
}

function leadingToggle() {
  leadingBar.style.visibility = "visible";
  setTimeout(() => {
    leadingBar.style.visibility = "hidden";
  }, 5000);
}

function stackedToggle() {
  stackedBar.style.visibility = "visible";
  setTimeout(() => {
    stackedBar.style.visibility = "hidden";
  }, 5000);
}

function closeStacked() {
  stackedBar.style.visibility = "hidden";
}
function closeLeading() {
  leadingBar.style.visibility = "hidden";
}
function closeBaseline() {
  baselineBar.style.visibility = "hidden";
}
