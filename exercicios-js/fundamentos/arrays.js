const valores = [7.7, 8.9, 3.4, 9.2]

console.log(valores[0], valores[3]) // mostra a posição 0 e a posição 3
console.log(valores[4]) // aqui da undefined pois não existe

valores[4] = 1.2

console.log(valores[4]) // agora aparece porque o array não é fixo, podemos adicionar itens ao elemento a qualquer momento

console.log(valores.length) //mostra quantos elementos tem

valores.push({id:3}, false, null, 'teste') // PUSH adiciona valores e vc pode misturar valores no array mas isso não é uma boa prática
console.log(valores)

console.log(valores.pop())// pega o último valor do array
delete valores[0] // remove o elemento 0
console.log(valores)

console.log(typeof valores) // mostra o tipo do array