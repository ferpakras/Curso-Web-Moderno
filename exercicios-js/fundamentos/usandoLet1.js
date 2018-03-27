// let tem 3 escopos: GLOBAL (visível pra todo mundo), escopo de função, ou escopo de bloco. De dentro pra fora

var numero = 1
{
    let numero = 2 // por ser let, ele respeita o escopo menor. Neste caso ele respeita o que está dentro do bloco. Se não encontrar neste bloco, aí ele vai procurar o escopo acima
    console.log('dentro = ', numero)
}
console.log('fora = ', numero)