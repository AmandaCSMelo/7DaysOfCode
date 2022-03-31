let n1 = '';
let n2 = '';
let resultado = '';
let operacao = '';

while (operacao != 'sair'){
    operacao = prompt("Digite qual operação deseja executar? 'soma', 'subtracao', 'multiplicacao', 'divisao' e 'sair'");
    switch(operacao){
        case 'soma':
        n1 = prompt('Digite o primeiro número:');
        n2 = prompt('Digite o segundo número: ')
        resultado = Number(n1) + Number(n2);
        alert(`O resultado é ${resultado}.`);
        break;
        
        case 'subtracao':
        n1 = prompt('Digite o primeiro número:');
        n2 = prompt('Digite o segundo número: ')
        resultado = Number(n1) - Number(n2);
        alert(`O resultado é ${resultado}.`);
        break;

        case 'multiplicacao':
        n1 = prompt('Digite o primeiro número:');
        n2 = prompt('Digite o segundo número: ')
        resultado = Number(n1) * Number(n2);
        alert(`O resultado é ${resultado}.`);
        break;

        case 'divisao':
        n1 = prompt('Digite o primeiro número:');
        n2 = prompt('Digite o segundo número: ')
        resultado = Number(n1) / Number(n2);
        alert(`O resultado é ${resultado}.`);
        break;
    }
}

