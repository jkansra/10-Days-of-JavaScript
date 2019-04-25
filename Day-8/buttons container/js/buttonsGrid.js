var btnOne = document.getElementById('btn1');
var btnTwo = document.getElementById('btn2');
var btnThree = document.getElementById('btn3');
var btnFour = document.getElementById('btn4');
var btnFive = document.getElementById('btn5');
var btnSix = document.getElementById('btn6');
var btnSeven = document.getElementById('btn7');
var btnEight = document.getElementById('btn8');
var btnNine = document.getElementById('btn9');
btnFive.addEventListener('click',rotateClockwise);

function rotateClockwise(){
    var btnOneValue = btnOne.innerHTML;
    btnOne.innerHTML = btnFour.innerHTML;
    btnFour.innerHTML = btnSeven.innerHTML;
    btnSeven.innerHTML = btnEight.innerHTML;
    btnEight.innerHTML = btnNine.innerHTML;
    btnNine.innerHTML = btnSix.innerHTML;
    btnSix.innerHTML = btnThree.innerHTML;
    btnThree.innerHTML = btnTwo.innerHTML;
    btnTwo.innerHTML = btnOneValue;
    
}