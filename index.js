const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
    if (display.value == 99995){display.value = "HACKED"}else{}
}

function showButtonsForBase(base) {
    const Numbuttons = document.querySelectorAll('.num-btn');//number button 
    const convertButtons = document.querySelectorAll('.conv-btn');// Conversion buttons
    
    Numbuttons.forEach(button => {
        const value = button.innerText; // Get button label
        
        // Determine which buttons to show based on the base
        if (
            (base === 2 && !/^[01]$/.test(value)) || // Binary: Allow 0-1
            (base === 8 && !/^[0-7]$/.test(value)) || // Octal: Allow 0-7
            (base === 10 && !/^[0-9]$/.test(value)) || // Decimal: Allow 0-9
            (base === 16 && !/^[0-9A-F]$/.test(value)) // Hexadecimal: Allow 0-9, A-F
        ) {
            button.style.opacity = '0.3'; // Make the button litt invisible
            button.style.pointerEvents = 'none'; // Disable interaction
            
        } else {
            button.style.opacity = '1'; // Make the button visible
            button.style.pointerEvents = 'auto'; // Enable interaction

        }
    });
    convertButtons.forEach(button => {
        if (
            (base === 2 && button.id === 'binary-convert') || // Hide Binary Convert for base 2
            (base === 8 && button.id === 'octal-convert') || // Hide Octal Convert for base 8
            (base === 10 && button.id === 'decimal-convert') || // Hide Decimal Convert for base 10
            (base === 16 && button.id === 'hex-convert') // Hide Hex Convert for base 16
        ) {
            button.style.opacity = '0.3'; // Make conversion button invisible
            button.style.pointerEvents = 'none'; // Disable interaction
        } else {
            button.style.opacity = '1'; // Show conversion button
            button.style.pointerEvents = 'auto'; // Enable interaction
        }
    });
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
function modeHex(){const buttons = document.querySelectorAll('.num-btn');
    buttons.forEach(button => {
        const value = button.innerText;
        if (!/[0-9A-F]/.test(value)) {
            button.style.display = 'none'; // Hide non-decimal buttons
        }
    });}
function modeBin(){const buttons = document.querySelectorAll('.num-btn');
    buttons.forEach(button => {
        const value = button.innerText;
        if (!/[01]/.test(value)) {
            button.style.display = 'none'; // Hide non-decimal buttons
        }
    });}


function showOnlyDecimal() {
    const buttons = document.querySelectorAll('.num-btn');
    buttons.forEach(button => {
        const value = button.innerText;
        if (!/[0-9]/.test(value)) {
            button.style.display = 'none'; // Hide non-decimal buttons
        }
    });
}
function resetButtons() {
    const buttons = document.querySelectorAll('.num-btn');
    const convertButtons = document.querySelectorAll('.conv-btn');
    buttons.forEach(button => {
        button.style.opacity = '1'; // Make all buttons visible
        button.style.pointerEvents = 'auto'; // Enable interaction for all
        
    });
    convertButtons.forEach(button => {
        button.style.opacity = '1';
        button.style.pointerEvents = 'auto';
    });
}
function modeOct(){const buttons = document.querySelectorAll('.num-btn');
    buttons.forEach(button => {
        const value = button.innerText;
        if (!/[0-7]/.test(value)) {
            button.style.display = 'none'; // Hide non-decimal buttons
        }
    });}
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
        display.value = decimalValue.toString(16).toUpperCase(); // Convert to Hexadecimal string
    } else {
        display.value = "Error";
        alert("Invalid input! Please enter a valid number.");
    }
    }

