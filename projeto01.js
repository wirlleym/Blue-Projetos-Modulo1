console.clear();
const prompt = require('prompt-sync')();

let heroi = prompt('Digite seu nome: ')
console.clear();
console.log(`A Primeira Habilitação de ${heroi}.`);
console.log();
console.log('O sonho de muitos adolescentes é fazer 18 anos, para poder finalmente, dirigir! \nMas espera aí que não é tão simples assim, é necessário alguns requisitos.')
let interação = prompt(`Vamos ver se você cumpre os requisitos para conquistar sua primeira habilitação?`);
console.log();
console.log("Responda as perguntas com: Sim ou Não");
console.log();
let pergunta1 = prompt(`Você tem 18 anos completos?`).toLowerCase();
console.log();
let pergunta2 = prompt(`Você sabe ler e escrever;?`).toLowerCase();
console.log();
let pergunta3 = prompt(`Você possui documento de identificação com foto?`).toLowerCase();
console.log();
let pergunta4 = prompt(`Você possui Cadastro de Pessoa Física (CPF)?`).toLowerCase();
console.log();
let pergunta5 = prompt(`Você possui comprovante de residência?`).toLowerCase();
console.log();

let cont = 0;

  if(pergunta1 == "sim" || pergunta1=="s"){
  cont++;
  }
  if(pergunta2 == "sim" || pergunta2=="s"){
  cont++;
  }
  if(pergunta3 == "sim" || pergunta3=="s"){
  cont++;
  }
  if(pergunta4 == "sim" || pergunta4=="s"){
  cont++; 
  }
  if(pergunta5 == "sim" || pergunta5=="s"){
    cont++;
  }
    if (cont == 5){
      console.log("Parabéns você consquistou sua Primeira Habilitação!");
    } else if (cont == 4){
      console.log("Falta apenas 1 Requisito para consquistar sua Primeira Habilitação");
    } else if (cont == 3){
      console.log("Faltam apenas 2 Requisitos para consquistar sua Primeira Habilitação");
    } else if (cont == 2){
      console.log("Que pena, faltam 3 Requisitos para consquistar sua Primeira Habilitação");
    } else if (cont == 1){
      console.log("Que pena, faltam 4 Requisitos para consquistar sua Primeira Habilitação");
    } else{
      console.log("Que pena, faltam 5 Requisitos para consquistar sua Primeira Habilitação");
    }