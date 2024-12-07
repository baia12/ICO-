const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
    if (display.value == 987076){display.value = "HACKED"}else{}
}

function clearDisplay() {
    display.value = "";
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

function toBinary() {
    if (display.value) {
        const decimalValue = parseInt(display.value,10); // Parse as decimal
        if (!isNaN(decimalValue)) {
            display.value = decimalValue.toString(2); // Convert to binary
        } else { display.value = "Error ";
            alert("BAD INPUT BRO,ONLY ACCEPT DECIMAL");
        }
    }}
    

function toDec() {
    const input = display.value.trim(); // Get input and trim whitespace
    let base = 10; // Default to decimal

    if (/^[01]+$/.test(input)) {
        base = 2; // Binary
    } else if (/^[0-7]+$/.test(input) && input[0] === '0') {
        base = 8; // Octal
    } else if (/^[0-9A-Fa-f]+$/.test(input)) {
        base = 16; // Hexadecimal
    }

    // Convert to decimal
    const decimalValue = parseInt(input, base);

    if (!isNaN(decimalValue)) {
        display.value = decimalValue.toString(10); // Convert to decimal string
    } else {
        display.value = "Error";
        alert("Invalid input! Please enter a valid number.");
    }
}
function toOctal() 
{
    if (display.value) {
        const decimalValue = parseInt(display.value,10); // Parse as decimal only
        if (!isNaN(decimalValue)) {
            display.value = decimalValue.toString(8); // Convert to octal string
        } else {
            display.value = "Error ";
            alert("BAD INPUT BRO ONLY ACCEPT DECIMAL");
        }
}}

function toHexadecimal() 
{
if (display.value) {     
        const decimalValue = parseInt(display.value,10); // Parse as decimal only
        if (!isNaN(decimalValue)) {
             display.value = decimalValue.toString(16).toUpperCase(); // Convert to hex string
} else {
    display.value = "Error ";
    alert("BAD INPUT BRO ONLY ACCEPT DECIMAL");
}}}
