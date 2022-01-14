let operand1 ='';
let operand2 ='';
let operator ='';
let result = '';

const outputScreen = document.querySelector('.output');
const numericKeys = document.querySelectorAll('.numeric');
numericKeys.forEach((numericKeys)=>{
    numericKeys.addEventListener('click', ()=>{       
        if(operator == ''){
            operand1 += numericKeys.textContent;
            outputScreen.textContent = operand1;
        }else if(operator !== ''){
            operand2 += numericKeys.textContent;
            outputScreen.textContent = `${operand1}${operator}${operand2}`;           
        }        
    });
});

const operatorKeys = document.querySelectorAll('.operator');
operatorKeys.forEach((operatorKeys)=>{
    operatorKeys.addEventListener('click', ()=>{
        if(operand1 !== '' && operand2=='' && operator ==''){  
            operator = operatorKeys.textContent;   
            outputScreen.textContent += operator;
        }else if(operand2 !== '' && operand1 !== '' && operator !== ''){
            result = operate(operator, operand1, operand2);
            if(result % 1 !== 0){
                result = result.toFixed(3);
                operator = operatorKeys.textContent;
                operand1 = result;
                outputScreen.textContent = `${result}${operator}`;
                operand2 = '';
            }else{
                operator = operatorKeys.textContent;
                operand1 = result;
                outputScreen.textContent = `${result}${operator}`;
                operand2 = '';
            }   
        }          
    });
});

const allClearBtn = document.querySelector('.clear');
allClearBtn.addEventListener('click', ()=>{
    clearAll();
});


const equalKey = document.querySelector('.equal');
equalKey.addEventListener('click', ()=>{
    if(operand1 == '' || operand2 =='' || operator == ''){
        outputScreen.textContent = 'e r r o r';
    }else{
        result = operate(operator, operand1, operand2);
        if(result % 1 !== 0){
            result = result.toFixed(3);
            outputScreen.textContent = result;
            operand1 = result;
            operator = '';
            operand2 = '';
        }else{
            outputScreen.textContent = result;
            operand1 = result;
            operator = '';
            operand2 = '';
        }
    }
    
});

function clearAll(){
    outputScreen.textContent = ''; 
    operand1 ='';
    operand2 ='';
    operator ='';
    result = '';  
}

function operate(operation, firstOperand, secondOperand){
    firstOperand = Number(firstOperand);
    secondOperand = Number(secondOperand);
    switch(operation){
        case '+':
            return firstOperand + secondOperand;
            break;
        case '-':
            return firstOperand - secondOperand;
            break;
        case '*':
            return firstOperand * secondOperand;
            break;
        case '/':
            if(operand2 == 0){
                outputScreen.textContent = 'e r r o r';
            }else{
                return firstOperand / secondOperand;
            }
    }
    
}
