/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea

// Comentario en una línea

// 2. Escribe un comentario en varias líneas

/* Comentario en
varias líneas,
otra línea más */

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let unString = "Este es mi string";
let unNumero = 30;
let meGustaProgramar = true;
let undefinedValue;
let nullValue = null;
let unSymbol = Symbol("unsymbol");
let unBigInt = BigInt(1231243325435438645736738424283848235234723849233958237481293492395822934);
let otroBigIntPeroDeclaradoDistinto = 123123325845477327472384823853824582384582384588932495923458382457n;

// 4. Imprime por consola el valor de todas las variables
let variables = [unString, unNumero, meGustaProgramar, undefinedValue, nullValue, unSymbol, unBigInt, otroBigIntPeroDeclaradoDistinto];
for (let variable of variables) {
    console.log(variable);
}
// 5. Imprime por consola el tipo de todas las variables
for (let variable of variables) {
    console.log(typeof variable);
}
// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
unString = "Otro string distinto";
unNumero = 12;
meGustaProgramar = false // esto no es verdad :(
undefinedValue;
nullValue = null;
unSymbol = Symbol("otrosymbol");
unBigInt = BigInt(123124234532543285284832583248823458324757128493295623485627134293459324582348123592582834);
otroBigIntPeroDeclaradoDistinto = 32347526374812432752387482714342376274672346273856872364712632647823647236476728634726482347234n;

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
unString = 30;
unNumero = null;
meGustaProgramar = undefined;
undefinedValue = "Ahora estoy definido y soy un string";
nullValue = Symbol("nosoynull");
unSymbol = BigInt(13249232534852823485832485892345983284583248582385823485832451238581285324);
unBigInt = true;

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const constString = "Soy un string constante";
const constNumber = 55;
const meGustaLaPizza = true; // esto no cambia bajo ningún concepto...
const constUndefinedValue = undefined;
const constNullValue = null;
const constSymbol = Symbol("constsymbol");
const constBigInt = BigInt(1248328523477748324852833587172348231482315721374812385812374547);

// 9. A continuación, modifica los valores de las constantes
/* constString = "Voy a dar error porque no puedo cambiar";
constNumber = 123;
meGustaLaPizza = false;
constUndefinedValue = "ahora voy a intentar definirme...";
constNullValue = "Ya no soy null?";
constSymbol = Symbol("otrosymbol");
constBigInt = BigInt(231249235931245243523452345234523452345322341234532445948474384834);
*/
// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse