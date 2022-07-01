/**
 * Ejercicios de Lógica 🚀
 * 
 * Ejercicio 3:
 * 
 * Instrucciones: pide al usuario que indique su nombre y su edad. 
 * 
 * Como mensaje de salida le indicarás qué edad tuvo el año pasado y 
 * cuantos años tendrá el siguiente año.
 * 
 * Ejemplo: [nombre] el año pasado tenías X años y el próximo año cumplirás Y años.
 * 
 */

function validateData(name, age){
    
    var validString;
    var validNumber;
    var name;
    var age;

    if (name != '' && name.match("^[A-Za-z]")) {
        validString = true;
    } else {
        validString = false;
    }
    
    if (typeof age == 'number') {
        validNumber = true;
    } else {
        validNumber = false;
    }
    
    if (validString && validNumber){
        var valid = calculateAges(name,age);
        return valid;
    }else{
        var valid = 'Alguno de los datos ingresados es incorrecto';
        return valid;
    }
}

function calculateAges(name,age){

    var ageMin = age - 1;
    var ageMax = age + 1;
    
    var msg = name +' el año pasado tenías '+ ageMin + ' años y el próximo año cumplirás '+ ageMax +' años.';

    return msg;
}

test1 = validateData('Angeles',15n);
console.log(test1);

test2 = validateData('Miguel',20);
console.log(test2);

test3 = validateData('Samuel',30);
console.log(test3);

test4 = validateData('Carlos',24);
console.log(test4);
