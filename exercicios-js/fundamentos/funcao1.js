// Funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) //2 + undefined = NaN (not a number)
imprimirSoma(2, 3, 4, 5, 6,) // soma apenas a e b
imprimirSoma() //vazio = not a number

// Funcao com retorno
function soma(a, b = 1) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2)) // retorna 3 pq o valor de b = 0