/* Objeto é uma combinação de chave => valor
 * pode-se ter objetos dentro de objetos
 * 
*/

/* 
 * Cria o Objeto vazio e vai adicionando os atributos
 * e valores de forma dinamica
 * 
*/
const prod1 = {} // par de chaves representa objeto. Se fosse conchetes representaria array

prod1.nome = 'Celular ultra Mega'
prod1.preco = 4986.90
prod1['Desconto Legal'] = 0.40 // evitar atributos com espaço

console.log(prod1)

// Criando objeto já com os valores
const prod2 = {
    nome: 'Camila Polo',
    preco: 79.90,
    obj: {
        blabla: 1,
        obj: { // obj é único dentro de obj
            blabla: 2
        }
    }
}

console.log(prod2)