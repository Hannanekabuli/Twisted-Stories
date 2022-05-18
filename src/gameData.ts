import { GameStep } from "./interfaces"

const gameStep : gameStep[] = [
    {
      id : 1,
      question : "welcommen, Är ni redo?",
      description : 'Du kan välja!',
      choices : [
          { 
            image: '',
            text: 'Ja',
            nextIO: 2
        },{ 
            image: '',
            text: 'Nej',
            nextIO: 3
        },
        null,
        null
       
      ]
    },


    {
        id : 2,
        question : "Vem har skappat JavaScript?",
        description : '',
        choices : [
            { 
              image: '',
              text: 'Brenden Eich',
              nextIO: 4
          },{ 
              image: '',
              text: 'Elon Musk',
              nextIO: 3
          },
          null,
          null
         
        ]
      },



      {
        id : 3,
        question : "Du är inte redo!!!!",
        description : '',
        choices : [
            { 
              image: '',
              text: 'Ja',
              nextIO: 2
          },{ 
              image: '',
              text: 'Nej',
              nextIO: 1
          },
          null,
          null
         
        ]
      },



      {
        id : 4,
        question : "Vilken är JavaScript bibliotek?",
        description : '',
        choices : [
            { 
              image: './src/image/React.png',
              text: 'React JS',
              nextIO: 5
          },{ 
              image: '',
              text: 'JSX',
              nextIO: 3
          },
          null,
          null
         
        ]
      },


      


  ]
