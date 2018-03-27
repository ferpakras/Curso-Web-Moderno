/* Quando você cria uma variável fora de uma
 * função, essa variável é global, ou seja, 
 * ela estará fora do window (do navegador).
 * O perigo de criar variávels globais em JS,
 * você pode acabar sobrescrevendo em algum momento
*/
// var só tem 2 escopos: ou é GLOBAL (visível pra todo mundo) ou é no escopo de função

{
    {
        {
            { 
                var sera = 'Será??' // var permite que essa variável esteja visível fora desse bloco
                console.log(sera)
            }
        }
    }
}
console.log(sera)

function teste() {
    var local = 123
    console.log(local) // aqui funciona, ele consegue acessar a variavel local
}
teste()
//console.log(local) // aqui da erro. Var está dentro da function e não pode ser acessada fora