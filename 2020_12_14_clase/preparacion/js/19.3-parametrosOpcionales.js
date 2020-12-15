'use strict'

// Funciones
// Una función es una agrupación reutilizable de un conjunto de instrucciones

// Defino la función
function calculadora(numero1, numero2, mostrar = false){

    // Conjunto de instrucciones a ejecutar

    if(mostrar == false){
        console.log("Suma: "+ (numero1+numero2));
        console.log("Resta: "+ (numero1-numero2));
        console.log("Multiplicación: "+ (numero1*numero2));
        console.log("División: "+ (numero1/numero2));
        console.log("***************************************")
    }else{
        document.write("Suma: "+ (numero1+numero2)+"<br>");
        document.write("Resta: "+ (numero1-numero2)+"<br>");
        document.write("Multiplicación: "+ (numero1*numero2)+"<br>");
        document.write("División: "+ (numero1/numero2)+"<br>");
        document.write("***************************************")
    }
}

// Invocar o llamar a la función

for (let i = 0; i <= 10; i++) {
    console.log(i);
    //calculadora(i, 8);
    calculadora(i, 8, true);
}
