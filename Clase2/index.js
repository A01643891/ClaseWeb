let fullOperation = '';

function number(value){
    console.log(value);
    fullOperation += value;
    renderNumber();
}

function operation(op){
    console.log(op);
    fullOperation += " " + op + " ";
    renderNumber();
}

function renderNumber(){
    document.getElementById('screen').innerHTML = fullOperation;
}