let numero
let resultado

function parouimpar() {
    numero = Number(prompt("Informe um número: "));

    resultado = numero % 2;

    if(numero == 67){
        alert("67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67 67");
    }

    if(resultado == 0){
        alert("O número " + numero + " é PAR.");
    }else{
        alert("O número " + numero + " é IMPAR.");
    }

    
}