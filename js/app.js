const main = document.querySelector('main');
const randomNumber = getRandomNumber(10);
let tentativa;

let numTentativas =0;

function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

// TODO: Use a loop to create a number guessing game
//  1) Ask the user to enter a number and assign that value to the `guess` variable

//  2) End the loop when the user's guess matches the random number

do{
tentativa = prompt('Estou pensando em um número entre 1 e 10. Qual é? ');
numTentativas++;   
  
//}while(parseInt(tentativa) !== randomNumber), tentar ate acertar
  
}while (numTentativas <10); //10 tentativas apenas
  
  
//  3) Display a message letting the user know they guessed the number
  
  main.innerHTML= `<h1> Você precisou de ${numTentativas} tentativas para adivinhar o número ${randomNumber}</h1>`;



