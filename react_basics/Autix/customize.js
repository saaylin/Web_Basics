const car = localStorage.getItem("car") || "bmw";

function updateImage() {
  const color = document.getElementById("color").value;

  const imagePath = `images/${car}-${color}.png`;

  document.getElementById("carImage").src = imagePath;
}

window.onload = updateImage;

document.getElementById("color").addEventListener("change", updateImage);

function saveCustom() {
  const colorPrice = parseInt(document.getElementById("color").selectedOptions[0].dataset.price);
  const wheels = parseInt(document.getElementById("wheels").value);

  let base = parseInt(localStorage.getItem("price")) || 0;
  let total = base + colorPrice + wheels;

  alert("Gesamtpreis: " + total + " €");
}