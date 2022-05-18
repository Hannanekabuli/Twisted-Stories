import './style.css'

import { GameStep } from './interfaces'
import { gamesteps } from './gameData'

const app = document.querySelector<HTMLAnchorElement>('#app')

interface gameStep {
  id : number
  question : string
  description : string
  choices : {
  image : string
  text : string
  nextID : number
  }




 
