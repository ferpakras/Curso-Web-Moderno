const funcs = []

for (var i = 0; i < 10; i++){
    funcs.push(function() { // pra cada valor de i (0 a 9) ele adicionará uma nova função no array e vai imprimir a variável que nesse contexto é = i
        console.log(i)
    })
}

funcs[2]() // var não tem escopo de função, então vai imprimir para todas as funções o valor seguinto ao loop. Returno é 10
funcs[8]() // var não tem escopo de função, então vai imprimir para todas as funções o valor seguinto ao loop. Returno é 10

// isso acontece devido a declaração da variável i < 10, que é o último valor recebido pela VAR. Por isso temos o retorno de 10