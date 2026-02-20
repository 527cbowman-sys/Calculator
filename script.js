// WHAT USER IS CURRENTLY TYPING
let typedNumberText = ''

// THE NUMBER WE STORE FOR CALCULATIONS
let storedNumber = null

// THE OPERATOR CURRENTLY SELECTED (+ - * /)
let currentOperator = ''

// USED ONLY FOR DISPLAYING THE HISTORY LINE
// EXAMPLE: ["3", "+", "4"]
let historyParts = []


function setStatus(message){
    document.getElementById('statusLine').innerText = message
}

function showSymbol(op){
    if (op === '*') return '×';
    if (op === '/') return '÷';
    if (op === '-') return '&#x2212';
    return op;
}

function updateScreen(){
    const display = document.getElementById('displayLine')
    const history = document.getElementById('historyLine')
    const status = document.getElementById('statusLine')

    display.textContent = typedNumberText
}


function pressNumber(digit) {
    setStatus('')

    //STORE NUMBER BEING PRESSED
    if (typedNumberText === '0') {
        typedNumberText = digit;
    } else {
        typedNumberText = typedNumberText + digit
    }

    updateScreen()
}