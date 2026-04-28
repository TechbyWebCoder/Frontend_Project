function convert() {
    const inputValue = document.getElementById('inputValue').value;
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;

    const units = {
        cm: 0.01,
        inch: 0.0254,
        feet: 0.3048,
        meter: 1,
        yard: 0.9144,
        mile: 1609.34,
        kilometer: 1000
    };

    const result = (inputValue * units[fromUnit]) / units[toUnit];
    document.getElementById('result').textContent = result ? `${inputValue} ${fromUnit} = ${result.toFixed(4)} ${toUnit}` : '';
}
