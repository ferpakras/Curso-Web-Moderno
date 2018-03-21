let valor // não inicializada. Nada atribuido
console.log(valor)

valor = null // significa que tem a variavel mas não está apontando pra nenhum local de memória (Nulo quer dizer ausencia de valor)
console.log(valor)
// null é usado para zerar a referência em algum momento do seu código / sistema

//console.log(valor.toString()) // Erro! não tem referência toString para valores nulos

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined. Quando quiser limpar o valor coloca 0 ou null
console.log(!!produto.preco)
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)