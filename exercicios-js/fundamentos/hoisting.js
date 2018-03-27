/* hoisting é o ato de jogar uma variável para cima (içamento)
 * no exemplo abaixo, chamamos a variável antes mesmo de declará-la
 * devido o hoisting, esse código retornará como undefined, pois o 'a'
 * ainda não estava definido, porém ele reconhece a variável
 * Pode-se dizer que o código final ficaria assim:
 * var a
 * console.log('a =', a)
 * a = 2
 * console.log('a =', a)
*/

console.log('a =', a)
var a = 2
console.log('a =', a)

// Quando usamos LET, o içamento não ocorre
console.log('b =', b)
let b = 2
console.log('b =', b)