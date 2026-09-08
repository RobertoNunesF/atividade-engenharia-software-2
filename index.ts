import { Veiculo } from "./Veiculo";
import prompt from "prompt-sync";

const teclado = prompt();

console.log('Criação de veículo');
const carro: Veiculo = criaVeiculo();

while(true){
    console.log("########### MENU ###########");
    console.log("1 - Acelerar");
    console.log("2 - Frear");
    console.log("3 - Subir marcha");
    console.log("4 - Descer marcha");
    console.log("5 - Imprimir dados do veículo");
    console.log("0 - Sair");

    const opcao = +teclado('Escolha uma opção: ');
    if(opcao === 0){
        break;
    }
    switch (opcao) {
        case 1:
            acelerar(carro);
            break;

        case 5:
            imprimirDadosVeiculo(carro);
            break;

        default:
            break;
    }
}

function imprimirDadosVeiculo(veiculo: Veiculo): void{
    console.table(veiculo);
}

function acelerar(veiculo: Veiculo): void{
    if(veiculo.marchaAtual != 0){
    veiculo.velocidade += veiculo.potencia*0.1;
    console.log(veiculo.velocidade);
}}

const LIMITES_MARCHA = [0, 20, 50, 70, 90];

function subirMarcha(veiculo: Veiculo): void{
    if(veiculo.marchaAtual === 0){
        veiculo.marchaAtual = 1;
        console.log("Trocando para a marcha 1");
        return;
    }

    const proximaMarcha = veiculo.marchaAtual + 1;
    const limiteProximaMarcha = LIMITES_MARCHA[proximaMarcha - 1];

    if(proximaMarcha <= veiculo.numeroMarchas && veiculo.velocidade >= limiteProximaMarcha){
        veiculo.marchaAtual = proximaMarcha;
        console.log(`Trocando para a marcha ${proximaMarcha}`);
    }
}

function criaVeiculo(): Veiculo{
    const veiculo: Veiculo = new Veiculo();
    veiculo.marca = teclado('Marca: ');
    veiculo.modelo = teclado('Modelo: ');
    veiculo.potencia = +teclado('Potência: ');
    veiculo.numeroMarchas = +teclado('Número de marchas: ');
    return veiculo;
}


