const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'

// abrir com o símbolo da crase para permitir quebra de linhas
const template = `
  Olá
  ${nome}!` // nome da variável entre chaves e com $ para permitir a interpolação, que é a interpretação da variável neste local

console.log(concatenacao, template)

// Expressões - atenção para abertura usando crase
console.log(`1 + 1 = ${1 + 1}`) // o que colocar entre chaves o JS vai interpretar (interpolar)

// Função
const up = texto => texto.toUpperCase()

console.log(`Ei... ${up('cuidado')}`)