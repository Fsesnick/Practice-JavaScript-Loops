const main = document.querySelector('main');
const randomNumber = getRandomNumber(10);

let message ;

function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

for (let i =0; i <= 10; i++){  
 let tentativa = prompt('Estou pensando em um número entre 1 e 10. Qual é? ');
 
  if(parseInt(tentativa) === randomNumber){
    message = ` Você precisou de ${i} tentativas para adivinhar o número ${randomNumber}`;
    break;
  }else{
  message =` você não adivinhou o número. Era ${randomNumber}`;
  }
  
  
}
  
  
//  3) Display a message letting the user know they guessed the number
  
  main.innerHTML= `<h1>${message}</h1>`;



