const escola = "Cod3r"

console.log(escola.charAt(4)) // cospe o valor do 4 caracter (começa a contar do 0)
console.log(escola.charCodeAt(3)) // valor do 3 caracter na tabela ASCII (Unicode)
console.log(escola.indexOf('3')) // índice associado ao 3 dígito

console.log(escola.substring(1)) // imprime a partir do 1
console.log(escola.substring(0, 3)) // imprime do 0 ao 3 sem incluir o item 3

console.log('Escola '.concat(escola).concat("!")) // String + variavel + string
console.log('Escola ' + escola + "!") // String + variavel + string
console.log(escola.replace(3, 'e')) // faz o replace do elemento três pela string
console.log(escola.replace(/\d/, 'e')) // regex que substitui todos os digitos (nº) dentro do texto pela letra 'e'
console.log(escola.replace(/\w/g, 'e')) // regex que substitui tudo pela letra 'e'

console.log('Ana,Maria,Pedro'.split(',')) // transformar em array