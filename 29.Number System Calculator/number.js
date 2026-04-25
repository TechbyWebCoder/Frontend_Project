function convertNumber() {
    const number = document.getElementById('number').value;
    const base = document.getElementById('base').value;
    
    const decimalNumber = parseInt(number, base);
    
    if (isNaN(decimalNumber)) {
        alert('Please enter a valid number.');
        return;
    }

    const binary = decimalNumber.toString(2);
    const octal = decimalNumber.toString(8);
    const decimal = decimalNumber.toString(10);
    const hex = decimalNumber.toString(16).toUpperCase();

    document.getElementById('binaryResult').innerText = `Binary: ${binary}`;
    document.getElementById('octalResult').innerText = `Octal: ${octal}`;
    document.getElementById('decimalResult').innerText = `Decimal: ${decimal}`;
    document.getElementById('hexResult').innerText = `Hexadecimal: ${hex}`;
}
