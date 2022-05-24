

export const gameDataList: GameStep[] = [{
    id: 1, 
    question: "Du sitter i ditt klassrum och din telefon ringer.",
    image:"",
    choices: {
        one: {text: 'Du går ut och svara', path: 2},
        two: {text: 'Svarar inte!', path: 3}
    }
},  
{
  id: 2, 
  question: "Din granne ringa dig, säga att ditt hus brinner och kom hit snabbt",
  image: "",
  choices: {
          one: {text: 'Du tar min väska och går hem', path: 4},
          two: {text: 'Uppmärksamma', path: 3}
      }
  },
{
 id: 3, 
 question: "Men det kommer att ringa igen i din telefon!",
  image: "",
  choices: {
      one: {text: 'Du går ut och svara', path: 2},
      two: {text: 'Svarar inte!', path: 1}
   }
 },
 {
  id: 4, 
  question: "Brandbilar står utanför ditt hem. Du går in och träffa brandman på trappor.",
  choices: {
        one: {text: 'Fråga son vad har hänt', path: 6},
        two: {text: 'springa i ditt hem', path: 5}
  }
            
 },
 {
  id: 5, 
  question : "Du är i ditt lägenhet, men det är rök överallt.",
   choices: {
       one: {text: 'Börja igen', path: 2},
       two: {text: 'Fortsätt inte', path: 1}
  }
 },
 {
  id: 6, 
  question: "",
       choices: {
          one: {text: '', path: 7},
          two: {text: '', path: 7}
      }
  },
  {
    id: 7, 
    question: "",
         choices: {
            one: {text: '', path: 7},
            two: {text: '', path: 7}
        }
    },
    {
      id: 8, 
      question: "",
           choices: {
              one: {text: '', path: 7},
              two: {text: '', path: 7}
          }
      },
      {
        id: 9, 
        question: "",
             choices: {
                one: {text: '', path: 7},
                two: {text: '', path: 7}
            }
        },
]