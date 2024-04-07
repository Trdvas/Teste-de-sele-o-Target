
const n = 30;
let fib = [0,1];
let numeroEscolhido = 13;


for (let i = 2; i < n; i++){
    fib[i]= fib[i-1] + fib[i-2];
}

function verificarNum (){
    const n = fib.find((item) => item === numeroEscolhido)
    return n;
}

if (verificarNum()){
    console.log(`O número ${numeroEscolhido} pertence a sequência de Fibonacci`)
}
else {
    console.log(`O número ${numeroEscolhido} não pertence a sequência de Fibonacci`)
} 