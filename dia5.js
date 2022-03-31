let categoria = '';
let frutas = [];
let verduras = [];
let higiene = [];
let laticinios = [];
let comida = '';
let remover = '';


let adicionarProduto = 'sim';
while(adicionarProduto != 'não'){
    if(frutas.length === 0 && verduras.length === 0 && higiene.length ===0 && laticinios.length === 0){
    adicionarProduto = prompt('Gostaria de adiconar um produto na sua lista de compras ? Digite: sim ou não');
}else{

    adicionarProduto = prompt('Gostaria de adiconar um produto na sua lista de compras ? Digite: sim , não ou remover')

}
    while(adicionarProduto != 'sim' && adicionarProduto != 'não' && adicionarProduto != 'remover'){
        alert(`Digite uma resposta válida! Obs: sim ou não`);
        adicionarProduto =  prompt('Gostaria de adiconar um produto na sua lista de compras ? Digite: sim ou não');
}
if(adicionarProduto === 'não'){
    break;
}
if (adicionarProduto =='sim'){
 comida = prompt('Muito bem, qual o nome do produto?')
 categoria = prompt("Em qual cateria se encaixa: 'frutas', 'verduras', 'higiene' ou 'laticinios' ?");
if(categoria == 'frutas'){
    frutas.push(comida);
}else if(categoria === 'verduras'){
    verduras.push(comida);
}else if(categoria === 'higiene'){
    higiene.push(comida);
}else if(categoria === 'laticínios'){
    laticinios.push(comida);
}else{
    alert('Essa cateria ainda não está definida!')
}

}else if(adicionarProduto === 'remover'){

    if(frutas.length === 0 && verduras.length === 0 && higiene.length ===0 && laticinios.length === 0){
        alert(`Lista vazia!`);

}else{
    remover = prompt(`Lista de compras:\n Frutas: ${frutas}\n Verduras: ${verduras}\n Higiene: ${higiene}\n Laticínios: ${laticinios}\n\n Qual produto deseja remover?`)
    if(frutas.indexOf(remover) != -1){
        frutas.splice(frutas.indexOf(remover), 1);
        alert(`O produto ${remover} foi removido com sucesso!`)
    }else if(verduras.indexOf(remover) != -1){
        verduras.splice(verduras.indexOf(remover), 1);
        alert(`O produto ${remover} foi removido com sucesso!`)
    }else if(higiene.indexOf(remover) != -1){
        higiene.splice(higiene.indexOf(remover), 1);
        alert(`O produto ${remover} foi removido com sucesso!`)
    }else if(laticinios.indexOf(remover) != -1){
        laticinios.splice(laticinios.indexOf(remover), 1);
        alert(`O produto ${remover} foi removido com sucesso!`)
    }else{
        alert(`Item não encontra-se na lista!`)
    }
}
}
}
alert(`Lista de compras:\n Frutas: ${frutas}\n Verduras: ${verduras}\n Higiene: ${higiene}\n Laticínios: ${laticinios}`);


