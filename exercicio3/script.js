//a) 5 é maior que 20 e também é menor que 2;
const primeira = ( (5 > 20 ) && (5 < 2) );

console.log ("5 é maior que 20 e também é menor que 2", primeira)

//b) 5 é igual a 5 ou é igual a “5”;
const segunda = ( 5 === 5 || (5 === "5") );

console.log ("5 é igual a 5 ou é igual a “5”", segunda)

//c) negação de (vinte é maior que cinquenta)

const terceira =  (! (20 > 50))

console.log ("negação de (vinte é maior que cinquenta)", terceira)

//d) negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta)

const quarta = (! (20 > 50 || 50 > 60))

console.log ("negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta)", quarta)



/*

//a) 5 é maior que 20 e também é menor que 2;

console.log ( (5 > 20 ) && (5 < 2) )

//b) 5 é igual a 5 ou é igual a “5”;

console.log ( 5 === 5 || (5 === "5") )

//c) negação de (vinte é maior que cinquenta)

console.log (! (20 > 50))

//d) negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta)

console.log (! (20 > 50 || 50 > 60))

*/