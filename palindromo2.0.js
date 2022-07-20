var numero = 30 //digite aqui o número desejado e aperte F8 para rodar no terminal.
var binario = (numero).toString(2)
var res = binario.split("",)
    function reverse(n){
        return n.reverse().join("")
    }
    var num = reverse(res)

if(binario === num) {
    console.log(`O número ${numero} é palíndromo!`)
}else{
    console.log(`O número ${numero} não é palíndromo!`)
}
console.log(`Número ${numero} em binário é: ${binario}`)
console.log(`Número ${numero} em binário lido de trás para frente ${num}`)