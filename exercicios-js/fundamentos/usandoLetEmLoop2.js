const funcs = []

for (let i = 0; i < 10; i++){
    funcs.push(function() { // pra cada valor de i (0 a 9) ele adicionará uma nova função no array e vai imprimir a variável que nesse contexto é = i
        console.log(i)
    })
}

funcs[2]() // aqui o LET respeita o bloco e retornará o valor do array solicitado
funcs[8]() // aqui o LET respeita o bloco e retornará o valor do array solicitado