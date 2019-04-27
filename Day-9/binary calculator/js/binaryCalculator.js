var result = document.getElementById('res');
var zero = document.getElementById('btn0');
var one = document.getElementById('btn1');
var clear = document.getElementById('btnClr');
var equal = document.getElementById('btnEql');
var sum = document.getElementById('btnSum');
var sub = document.getElementById('btnSub');
var mul = document.getElementById('btnMul');
var div = document.getElementById('btnDiv');

function clearText(){
    result.innerHTML = '';
}
function updateText(){
    result.innerHTML += this.innerHTML;
}
function calculator(){
    if(result.innerHTML.includes('+')){
        showResult('+');
    }else if(result.innerHTML.includes('-')){
        showResult('-');
    }else if(result.innerHTML.includes('*')){
        showResult('*');
    }else if(result.innerHTML.includes('/')){
        showResult('/');
    }
}
function showResult(operator){
    var numbers = result.innerHTML.split(operator);
    var convert = numbers.map(number => parseInt(number,2));
    var integerResult = eval(convert.join(operator));
    result.innerHTML = (integerResult).toString(2);
}

clear.addEventListener('click',clearText);
zero.addEventListener('click',updateText);
one.addEventListener('click',updateText);
sum.addEventListener('click',updateText);
sub.addEventListener('click',updateText);
mul.addEventListener('click',updateText);
div.addEventListener('click',updateText);
equal.addEventListener('click',calculator);