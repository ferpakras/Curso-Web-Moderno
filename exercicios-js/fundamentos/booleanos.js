let isAtivo = false

console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

// numero também pode ser booleano
isAtivo = 1
console.log(!isAtivo) //usar a negacao para transformar o numero em não verdadeiro

console.log('os verdadeiros...')
console.log(!!3) // todos os números inteiros são true
console.log(!!-1)
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false)) //se for uma atribuição, se o que está a direita for false, o resultado é false

console.log('pra finalizar...')
console.log(!!''|| null || 0 || 'epa')

let nome = ''

console.log(nome || 'Desconhecido') // se o nome estiver vazio (retorna falso), então imprime Desconhecido