
const nome = prompt('Qual é seu nome?');


const resposta = prompt('Qual área você pretende seguir? Front-End ou Back-End ')
let linguaguem = '';
if(resposta == 'Front-End'){

    linguaguem = prompt('Parabéns! Front-End é uma excelente área! Você gostaria de aprender React ou Vue?' )
    
}else if(resposta == 'Back-End'){

    linguaguem = prompt('Parabéns! Back-End é uma excelente área! Você gostaria de aprender C# ou Java? ' )

}else{

    alert('Digite uma resposta válida! Obs: Front-End ou Back-End')

}

const especialidadeFullstack = prompt('Escolha o número correspondente: 1-Seguir se especializando na área escolhida  2-Seguir se desenvolvendo para se tornar um FULLSTACK')
if( especialidadeFullstack == 1){

    alert(`Muito bem, ${nome}! Continue se especializando na ${linguaguem} para dominar  área de ${resposta}!`)

}else if( especialidadeFullstack == 2){

    alert(`Para se tornar um FULLSTACK precisará aprender outras linguaguens além de ${linguaguem}`)

}else{

    alert('Digite uma resposta válida! Obs: Número 1 ou 2')

}

let msg = prompt('Você gostaria de conhecer ou aprender outras tecnologia? Se sim, digite ok ')
while(msg === 'ok'){

    let novaTecnologia = prompt('Qual seria a tecnologia?')
    alert(`${novaTecnologia} é um ótimo caminho a ser trilhado!`)
    msg = prompt('Teria mais alguma linguaguem que gostaria de aprender? Se sim, digite ok')

}