import './style.css'

import { gameDataList } from './gameData'

const app = document.querySelector<HTMLDivElement>('#app')


const textElement = document.querySelector(".question") as HTMLElement | null | undefined
const choiceOne = document.getElementById('left') as HTMLElement
const choiceTwo = document.querySelector('#right') as HTMLElement 



let gameStep = gameDataList[0]


function game(this: HTMLElement, event: MouseEvent) : void {
  let step: number = 1; 
  if(this.id == 'left') {
    step = gameStep.choices.one.path
  
  }else if(this.id == 'right') {
    step = gameStep.choices.two.path
  }else{
    console.log('error'); 
  }

  const foundPath = gameDataList.find( function (nextStep) {
    return nextStep.id == step;  

  })

  if(foundPath){
   gameStep = foundPath; 
   render(); 
  
}

if (Step.firstQts && Step.img) {

  let box = document.getElementById("inputContainer"); 

  let otherBox = document.createElement('section'); 
  otherBox.classList.add('otherBox'); 

  box?.appendChild(otherBox)

  let img = document.createElement('img')
  img.classList.add('drinkImg')
  img.src = Step.img

  otherBox?.appendChild(img)

} 

}

function render() {
  if(gameStep.question){
    textElement!.innerText = gameStep.question;
  }
  if(gameStep.choices.one){
    choiceOne.innerText = gameStep.choices.one.text;
  }
  if(gameStep.choices.two){
    choiceTwo.innerText = gameStep.choices.two.text;
  }
}


choiceOne.addEventListener("click", game)  
choiceTwo.addEventListener("click", game) 


function init(): void {
  
  render()
}

init()