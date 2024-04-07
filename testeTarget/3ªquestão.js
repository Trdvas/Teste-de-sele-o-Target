// Descubra e complete a lógica 
// A) 1,3,5,7__ os numeros estão sendo somados por 2 em uma progressão aritmética 


let sequenciaA = [1,3,5,7];
const progressaoA = 2

function sequencia() { 
    const n = sequenciaA.length -1;
    let resultado = sequenciaA[n] + progressaoA;
    return resultado;
}
console.log(`O ultimo numero da sequência é: ${sequencia()}`);

// B)2,4,8,16,32,64___ os numeros estão sendo multiplicado por 2 em uma progressão geométrica

let sequenciaB = [2,4,8,16,32,64];
const progressaoB = 2;

function sequencia1 (){
    const n = sequenciaB.length -1;
    let resultado = sequenciaB[n] * progressaoB;
    return resultado;
}
console.log(`O ultimo numero da sequência é: ${sequencia1()}`);

// C)0,1,4,9,16,25,36___ a diferença dos números esta sendo somado por 2 em uma progressão aritmética

let sequenciaC = [0,1,4,9,16,25,36]; 
let progressaoC = 2

function sequencia3 (){
    const n = sequenciaC.length -1;
    let resultado = sequenciaC[n] - sequenciaC[n-1] + progressaoC + sequenciaC[n] ;
    return resultado;
}
console.log(`O ultimo numero da sequência é: ${sequencia3()}`);


// D)4,16,36,64___ a diferença dos números esta sendo somado por 8 em uma progressão aritmética

let sequenciaD = [4,16,36,64]; 
let progressaoD = 8

function sequencia4 (){
    const n = sequenciaD.length -1;
    let resultado = sequenciaD[n] - sequenciaD[n-1] + progressaoD + sequenciaD[n] ;
    return resultado;
}
console.log(`O ultimo numero da sequência é: ${sequencia4()}`);



// E)1,1,2,3,5,8___ sequencia de Fibonacci, a soma dos dois ultimos números é o resultado do próximo número.

let sequenciaE = [1,1,2,3,5,8];

function sequencia5 (){
    const n = sequenciaE.length-1;
    let resultado = sequenciaE[n] + sequenciaE[n-1];
    return resultado;
}
console.log(`O ultimo numero da sequência é: ${sequencia5()}`);


// F)2,10,12,16,17,18,19___ a sequencia nao obedece nenhuma ordem por isso segui a referencia da subtração dos ultimos numeros da sequencia.

let sequenciaF = [2,10,12,16,17,18,19];

function sequencia6 (){
    const n = sequenciaF.length -1;
    let resultado = sequenciaF[n] - sequenciaF[n-1] + sequenciaF[n]
    return resultado;
}
console.log(`O ultimo numero da sequência é: ${sequencia6()}`);











