const vacas = 9;
const cuantasVacas = new Promise(function (resolve, reject) {
    if (vacas >10) {
        resolve(`Tengo ${vacas} vacas en la granja`)
    } else {
        reject("Tengo pocas vacas en la granja");
    }
});
cuantasVacas
    .then((result)=> {
        console.log(result);
    }).catch((error)=> {
        console.log(error);
    }).finally(() => console.log('Finalizado'));