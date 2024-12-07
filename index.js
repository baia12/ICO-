const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
    if (display.value == .005){display.value = "HACKED"}else{}
}


function clearDisplay() {
    display.value = "";
}
function deleteLastChar() {
    const currentValue = display.value; // Get the current input value
    if (currentValue.length > 0) {
        display.value = currentValue.slice(0, -1); // Remove the last character
    }
}
function modeHex(){}
function modeBin(){}
function modeDec(){}
function modeOct(){}
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "I LOVE YOU ";
    }
}

function TocheckBase() {
    const input = display.value.trim(); // Get input and trim whitespace

    if (/^[01]+$/.test(input)) {
        return 2; // Binary
    } else if (/^[0-7]+$/.test(input) && input.startsWith('0')) {
        return 8; // Octal
    } else if (/^[0-9A-Fa-f]+$/.test(input)) {
        return 16; // Hexadecimal
    } else if (/^\d+$/.test(input)) {
        return 10; // Decimal (Default)
    } else {
        return null; // Invalid input
    }
}


function toBinary() {
    const input = display.value.trim(); // Get input and trim whitespace
    let base = TocheckBase() // Default to decimal

    // Convert to decimal
    const decimalValue = parseInt(input, base);

    if (!isNaN(decimalValue)) {
        display.value = decimalValue.toString(2); // Convert to binary string
    } else {
        display.value = "Error";
        alert("Invalid input! Please enter a valid number.");
    }
}
    

function toDec() {
    const input = display.value.trim(); // Get input and trim whitespace
    let base = TocheckBase() // Default to decimal

    // Convert to decimal
    const decimalValue = parseInt(input, base);

    if (!isNaN(decimalValue)) {
        display.value = decimalValue.toString(10); // Convert to dec string
    } else {
        display.value = "Error";
        alert("Invalid input! Please enter a valid number.");
    }
}
function toOctal() 
{
    const input = display.value.trim(); // Get input and trim whitespace
    let base = TocheckBase() // Default to decimal

    // Convert to decimal
    const decimalValue = parseInt(input, base);

    if (!isNaN(decimalValue)) {
        display.value = decimalValue.toString(8); // Convert to octal string
    } else {
        display.value = "Error";
        alert("Invalid input! Please enter a valid number.");
    }
}
   


function toHexadecimal() {
    const input = display.value.trim(); // Get input and trim whitespace
    let base = TocheckBase() // Default to decimal

    // Convert to decimal
    const decimalValue = parseInt(input, base);

    if (!isNaN(decimalValue)) {
        display.value = decimalValue.toString(16); // Convert to Hexadecimal string
    } else {
        display.value = "Error";
        alert("Invalid input! Please enter a valid number.");
    }
    }

