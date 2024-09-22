let celscius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");

function celToFAr(){
    let output = ( parseFloat(celscius.value)) * 9/5 +32;
    fahrenheit.value= parseFloat(output.toFixed(2));
}

function farToCel(){
    let output =(parseFloat(fahrenheit.value) -32) * 5/9;
    celscius.value = parseFloat(output.toFixed(2));
}