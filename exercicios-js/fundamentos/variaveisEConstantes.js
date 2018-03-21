/*
 * var > palavra reservada
 * a > identificador
 * = > símbolo de atribuição
 * 3 > atribuição
*/
var a = 3

/*
 * let > palavra reservada
 * a > identificador
 * = > símbolo de atribuição
 * 3 > atribuição
 **** REGRA GERAL: crie variáveis usando LET (ECMAScript 2017) ****
 * JS não deixa variáveis LET serem declaradas duas vezes 
*/
let b = 4

var a = 30 // atenção aqui na repetição
b = 40 // se adicionar o let aqui, temos erro de console

console.log(a, b)

a = 300
b = 400

console.log(a,b)

/*
 * const > palavra reservada
 * a > identificador
 * = > símbolo de atribuição
 * 3 > atribuição
 **** CONST não permite atribuir um novo valor **** 
*/

const c = 5
//c = 50

console.log(c)
