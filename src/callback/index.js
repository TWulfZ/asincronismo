function suma(num1, num2) {
    return num1 + num2;
}

function calculo(num1, num2, callback) {
    return callback(num1, num2);
}

console.log(calculo(3, 4, suma));

setTimeout(function() {
    console.log('Hola asincronismo');
}, 2000);

function saludar(nombre) {
    console.log(`Hola ${nombre}`);
}

setTimeout(saludar, 2500, 'TWulfZ');