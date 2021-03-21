let btn1 = document.createElement('button');
btn1.className = 'operator';
btn1.value = '1/x';
btn1.innerHTML = '1/x';
let btn2 = document.createElement('button');
btn2.className = 'operator';
btn2.value = 'x!';
btn2.innerHTML = 'x!';
let btn3 = document.createElement('button');
btn3.className = 'operator';
btn3.value = 'ln';
btn3.innerHTML = 'ln';
let btn4 = document.createElement('button');
btn4.className = 'operator';
btn4.value = 'sqrt';
btn4.innerHTML = '&#8730;';
let sw = document.createElement('button');
sw.className = 'switch';
sw.innerHTML = 'More';
let rem = document.createElement('button');
rem.className = 'remover';
rem.innerHTML = 'Less';
const calculatorScreen = document.querySelector('.screen');
const updateScreen = (number) => {
    calculatorScreen.value=number
};

const numbers=document.querySelectorAll(".number");
let prevInput='0';
let calOperator= '';
let currentInp='0';

const inputNumber = (number)=>{
    if(currentInput==='0'){
        currentInput=number
    } else {
        currentInput=currentInput+number
    }
};

numbers.forEach((number)=>{
    number.addEventListener("click",(event)=>{
        inputNumber(event.target.value);
        updateScreen(currentInput)
    })
});

const operators = document.querySelectorAll(".operator");
const inputOperator = (operator) => {
    prevInput = currentInput;
    calculationOperator =  operator;
    updateScreen(operator);
    currentInput = '0'
};
operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
});

const equalSign = document.querySelector('.equal-sign');

equalSign.addEventListener("click", () => {
    calculate();
    updateScreen(currentInput)
});

const calculate = () => {
    let result = 0;
    switch(calculationOperator) {
        case '+':
            result = parseInt(prevInput) + parseInt(currentInput);
            break
        case '-':
            result = parseInt(prevInput) - parseInt(currentInput);
            break
        case '*':
            result = parseInt(prevInput) * parseInt(currentInput);
            break
        case '/':
            result = parseInt(prevInput) / parseInt(currentInput);
            break
        case '%':
            result = (parseInt(prevInput)/100)*parseInt(currentInput);
            break
        case 'x!':
            result = (Math.sqrt(parseInt(prevInput)));
            break
        default:
            return
    }
    currentInput = result.toString();
    calculationOperator = ''
};

const clearBtn = document.querySelector('.all-clear');
clearBtn.addEventListener('click', () => {
    console.log('Clear')
});

const clearAll = () => {
    prevInput = '0';
    calculationOperator = '';
    currentInput = '0'
};

clearBtn.addEventListener("click", () => {
    clearAll();
    updateScreen(currentInput)
});
btn4.addEventListener("click", () => {
   currentInput = Math.sqrt(parseInt(currentInput));
   updateScreen(currentInput)
});
btn3.addEventListener("click", () => {
    currentInput = Math.log(parseInt(currentInput));
    updateScreen(currentInput)
});
btn1.addEventListener("click", () => {
    currentInput = 1/(parseInt(currentInput));
    updateScreen(currentInput)
});
btn2.addEventListener("click", () => {
    function fact(n) {
    var res = 1;
    while (n){
        res *= n--;
    }
    return res
    }
    currentInput = fact(currentInput);
    updateScreen(currentInput)
});

let swiii = document.getElementById('1');
swiii.prepend(sw);
swiii.appendChild(rem);
const switchBtn = document.querySelector('.switch');
var  el = document.querySelector(".row");
calculatorScreen.after(el);
switchBtn.addEventListener('click', () =>{
    el.appendChild(rem);
    el.appendChild(btn2);
    el.appendChild(btn3);
    el.appendChild(btn4);
    sw.replaceWith(btn1);
});
const removebtn =document.querySelector('.remover');
removebtn.addEventListener('click', () =>{
    btn1.replaceWith(sw);
    btn2.remove();
    btn3.remove();
    btn4.remove();
    rem.remove();

});

