 //Predicción 1
 myBirthYearFunc();
 function myBirthYearFunc(){
        console.log("Nací en " + 1980);
    }   
//P: ¿Qué indicará console.log cuando se llame a esta función?
//R: "Nací en 1980"

//Predicción 2
myBirthYearFunc2();
function myBirthYearFunc2(EntradaAñoNacimiento){
    var EntradaAñoNacimiento;
    if (EntradaAñoNacimiento = "Miau");
        console.log("Nací en " + EntradaAñoNacimiento);
    }    
 //P: ¿Qué indicará console.log cuando se llame a esta función?
 //R: "Nací en " y despues depende de lo que se pide hacer la variable "EntradaAñoNacimiento"
//EJ: "EntradaAñoNacimiento = "Miau" el resultado sera "Nací en Miau"

//Predicción 3
add();
function add(num1, num2){
    var num1 = 10;
    var num2 = 20;
        console.log("¡Sumando números!");
        console.log("num1 is: " + num1);
        console.log("num2 is: " + num2);
        var sum = num1 + num2;
        console.log(sum);
    }    
//P: ¿Qué indicará console.log cuando se llame a esta función?
//R: "¡Sumando numeros!" , num1 es igual a 10, num2 es igual a 20, despues se hara la suma entre los dos y dara "30"