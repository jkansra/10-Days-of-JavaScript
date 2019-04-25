var button = document.createElement('Button');
button.innerHTML = '0';
button.id = 'btn';
document.body.appendChild(button);
button.addEventListener('click',increment);

function increment(){
    var currentValue = parseInt(this.innerHTML) + 1;
    this.innerHTML = currentValue.toString();
}