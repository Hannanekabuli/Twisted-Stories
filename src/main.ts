import './style.css'

import { gamesteps } from './gameData'

const app = document.querySelector<HTMLDivElement>('#app')

let currentStep = 1;
let question = document.querySelector('#question');
let image = document.querySelector('#image');
let btn = document.querySelector('#btn');

function update() {
  gamesteps.forEach(function(value) {

    if(value.id == currentStep){
      let choices = value.choices
      question.textContent = value.question
      choices.forEach(function(choice){

        if(choice){
          btn.innerHTML += ` <button class="answers" data-nextid="$(choice.nextID)">
          <img src="$(choice.image)" class="step--image" with="290">
          $(choice.text)
          </button> `
        }

      })
    }
  })
  answers()
}
update()


function answers(){
  let answers = document.querySelectorAll('.answers')
  answers.forEach(function(value){
  value.addEventListener('click',function(){
    currentStep = value.getAttribute('data-nextid')
    btn.innerHTML = ''
    update()
    console.log(currentStep)
  })
})
}
answers()





 
