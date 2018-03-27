var numero = 1
{ // isso não é uma função, é apenas um bloco
    var numero = 2 // aqui não é uma função. Se não é uma função o var continua sendo global
    console.log('dentro = ', numero)
}
console.log('fora = ', numero)