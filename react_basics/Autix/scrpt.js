const cars = [
  "BMW", "Mercedes", "Audi", "Porsche", "Tofas",
  "Lambo", "Ferrari", "Ford", "Tesla", "Nissan"
];

let currentCar = "";

function openSelect() {
  document.getElementById("carSelect").classList.remove("hidden");
  loadCars();
}

function closeSelect() {
  document.getElementById("carSelect").classList.add("hidden");
}

function loadCars() {
  const grid = document.getElementById("carGrid");
  grid.innerHTML = "";

  cars.forEach(car => {
    const div = document.createElement("div");
    div.className = "car-item";
    div.innerText = car;
    div.onclick = () => selectCar(car);
    grid.appendChild(div);
  });
}

function selectCar(car) {
  currentCar = car;
  document.getElementById("carImage").src = "https://via.placeholder.com/600x300?text=" + car;
  closeSelect();
}

function openCustomize() {
  document.getElementById("customize").classList.remove("hidden");
}

function closeCustomize() {
  document.getElementById("customize").classList.add("hidden");
}

function applyCustom() {
  const color = document.getElementById("color").value;
  document.getElementById("carImage").style.filter = `hue-rotate(${color === 'red' ? 0 : color === 'yellow' ? 60 : 200}deg)`;
}
