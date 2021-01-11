const main = document.querySelector('main');
const randomNumber = getRandomNumber(10);
let tentativa;
let numTentativas =0;
let message ;

function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

do{
  
tentativa = prompt('Estou pensando em um número entre 1 e 10. Qual é? ');
numTentativas++;   
  
  if(parseInt(tentativa) === randomNumber){
    message = ` Você precisou de ${numTentativas} tentativas para adivinhar o número ${randomNumber}`;
    break;
  }else{
  message =` você não adivinhou o número. Era ${randomNumber}`;
  }
  
  
}while (numTentativas <10); //10 tentativas apenas
  
  
//  3) Display a message letting the user know they guessed the number
  
  main.innerHTML= `<h1>${message}</h1>`;



