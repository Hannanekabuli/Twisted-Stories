import './style.css';
import { gameData } from './gameData';


const textElement = document.querySelector(".question") as HTMLElement
const choiceTwo = document.querySelector('#right') as HTMLElement  
const choiceOne = document.getElementById('left') as HTMLElement



let gameStep = gameData[0]


function game(this: HTMLElement) : void {
  let step: number = 1; 
  if(this.id == 'left') {
    step = gameStep.answers.left.path
  
  }else if(this.id == 'right') {
    step = gameStep.answers.right.path
  }else{
    console.log('error'); 
  }

  const foundPath = gameData.find( function (nextStep) {
    return nextStep.id == step;  

  })

  if(foundPath){
   gameStep = foundPath; 
   render(); 
  
}


}

function render() {
  if(gameStep.question){
    textElement!.innerText = gameStep.question;
  }
  if(gameStep.answers.left){
    choiceOne.innerText = gameStep.answers.left.text;
  }
  if(gameStep.answers.right){
    choiceTwo.innerText = gameStep.answers.right.text;
  }
}


choiceOne.addEventListener("click", game)  
choiceTwo.addEventListener("click", game) 


function init(): void {
  
  render()
}

init()



