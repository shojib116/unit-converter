/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const bodyEl = document.querySelector("body")
const colorSchemeBtn = document.querySelector("#color-scheme")
const systemPreference = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light"

function setPreference(preference) {
    bodyEl.classList.remove("light", "dark")
    bodyEl.classList.add(preference)
}

setPreference(systemPreference);

colorSchemeBtn.addEventListener("change", function() {
  const scheme = colorSchemeBtn.value

  if (scheme === "system") {
    setPreference(systemPreference)
  } else {
    setPreference(scheme)
  }
})

const inputEl = document.querySelector("#input-el")
const covertBtn = document.querySelector("#convert-btn")

const inputValElList = document.querySelectorAll(".input-val")
const lengthOutputEl = document.querySelector("#length-output")
const volumeOutputEl = document.querySelector("#volume-output")
const massOutputEl = document.querySelector("#mass-output")

const feetOutputEl = document.querySelector("#result-feet")
const meterOutputEl = document.querySelector("#result-meter")
const gallonOutputEl = document.querySelector("#result-gallon")
const literOutputEl = document.querySelector("#result-liter")
const poundsOutputEl = document.querySelector("#result-pounds")
const kilosOutputEl = document.querySelector("#result-kilos")

let value = 1
inputEl.value = value

function setInputVal(val) {
  for (const inputValEl of inputValElList) {
    inputValEl.innerText = val
  } 
}


function meterToFeet(val) {
  return val * 3.281
}

function feetToMeter(val) {
  return val / 3.281
}

function literToGallon(val) {
  return val * 0.264
}

function gallonToLiter(val) {
  return val / 0.264
}

function kiloToPound(val) {
  return val * 2.204
}

function poundToKilo(val) {
  return val / 2.204
}

function renderValues() {
  value = inputEl.value
  feetOutputEl.textContent = meterToFeet(value).toFixed(3)
  meterOutputEl.textContent = feetToMeter(value).toFixed(3)

  gallonOutputEl.textContent = literToGallon(value).toFixed(3)
  literOutputEl.textContent = gallonToLiter(value).toFixed(3)

  poundsOutputEl.textContent = kiloToPound(value).toFixed(3)
  kilosOutputEl.textContent = poundToKilo(value).toFixed(3)



  setInputVal(value)
}

renderValues()

covertBtn.addEventListener("click", renderValues)