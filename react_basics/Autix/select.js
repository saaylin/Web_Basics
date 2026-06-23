const cars = [
  "BMW", "Mercedes", "Audi", "Porsche", "Tofas",
  "Lambo", "Ferrari", "Ford", "Tesla", "Nissan"
];

const prices = {
  BMW: 30000,
  Mercedes: 32000,
  Audi: 31000,
  Porsche: 60000,
  Tofas: 15000,
  Lambo: 200000,
  Ferrari: 220000,
  Ford: 28000,
  Tesla: 50000,
  Nissan: 27000
};

const grid = document.getElementById("carGrid");

cars.forEach(car => {
  const div = document.createElement("div");
  div.className = "car-item";
  div.innerText = car;

  div.onclick = () => {
    localStorage.setItem("car", car.toLowerCase());
    localStorage.setItem("price", prices[car]);
    window.location.href = "customize.html";
  };

  grid.appendChild(div);
});