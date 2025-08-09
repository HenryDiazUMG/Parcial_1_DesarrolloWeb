// Archivo: script.js del proyecto
const convertirBtn = document.getElementById("convertirBtn");
const celsiusInput = document.getElementById("celsiusInput");
const listaConversiones = document.getElementById("listaConversiones");

convertirBtn.addEventListener("click", convertirTemperatura);

function convertirTemperatura() {
  const celsius = parseFloat(celsiusInput.value.trim());

  if (isNaN(celsius)) {
    alert("Por favor, ingresa un número válido.");
    return;
  }

  const fahrenheit = (celsius * 9/5) + 32;
  agregarConversion(celsius, fahrenheit);
  
  // Verificar si la temperatura es muy alta
  if (celsius > 40) {
    alert("¡Temperatura muy alta! ⚠️");
  }

  celsiusInput.value = "";
  celsiusInput.focus();
}

function agregarConversion(celsius, fahrenheit) {
  const li = document.createElement("li");
  li.className = "conversion";

  // Determinar la clase según la temperatura
  if (celsius < 0) {
    li.classList.add("bajo-cero");
    li.innerHTML = `${celsius} °C = ${fahrenheit.toFixed(2)} °F 🌊`;
  } else if (celsius >= 0 && celsius <= 40) {
    li.classList.add("temperatura-media");
    li.innerHTML = `${celsius} °C = ${fahrenheit.toFixed(2)} °F 🌼`;
  } else {
    li.classList.add("muy-alta");
    li.innerHTML = `${celsius} °C = ${fahrenheit.toFixed(2)} °F 🔥`;
  }

  listaConversiones.appendChild(li);
}
