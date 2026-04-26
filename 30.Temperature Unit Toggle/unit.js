// script.js
document.addEventListener('DOMContentLoaded', () => {
    const tempValue = document.getElementById('temp-value');
    const tempUnit = document.getElementById('temp-unit');
    const unitToggle = document.getElementById('unit-toggle');

    // Initial temperature in Celsius
    let temperatureCelsius = 20;
    let temperatureFahrenheit = (temperatureCelsius * 9/5) + 32;

    unitToggle.addEventListener('change', () => {
        if (unitToggle.checked) {
            // Convert to Fahrenheit
            tempValue.textContent = temperatureFahrenheit.toFixed(1);
            tempUnit.textContent = '°F';
        } else {
            // Convert back to Celsius
            tempValue.textContent = temperatureCelsius;
            tempUnit.textContent = '°C';
        }
    });
});
