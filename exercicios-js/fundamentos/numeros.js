// 
const peso1 = 1.0 // 1.0 considera valor inteiro | 1.1 considera valor fracionado
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))

const avaliacao1 = 9.8234
const avaliacao2 = 7.8234

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media) // valor final
console.log(media.toFixed(2)) // toFixed(2) limita em duas casas decimais
console.log(media.toString(2)) // toString(2) converte em binário
console.log(typeof media)