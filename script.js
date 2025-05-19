let displayValue = '';
let internalValue = '';

function calculate(value) {
    if (value === 'X') {
        displayValue += 'X';
        internalValue += '*';
    } else {
        displayValue += value;
        internalValue += value;
    }
    document.getElementById('display').value = displayValue;
}

function calculateResult() {
    try {
        const result = eval(internalValue);
        document.getElementById('display').value = result;
        displayValue = result.toString();
        internalValue = result.toString();
    } catch (error) {
        document.getElementById('display').value = 'Error';
        displayValue = '';
        internalValue = '';
    }
}

function clearDisplay() {
    displayValue = '';
    internalValue = '';
    document.getElementById('display').value = '';
}

function deleteLast() {
    const lastDisplayChar = displayValue.slice(-1);
    displayValue = displayValue.slice(0, -1);
    internalValue = internalValue.slice(0, -1);

    if (lastDisplayChar === 'X') {
        internalValue = internalValue.slice(0, -1); 
    }

    document.getElementById('display').value = displayValue;
}
