import { GameStep } from "./interfaces"


export let gamesteps: GameStep[] = [
    {
      id : 1,
      question : "welcommen, Är ni redo?",
      choices : [
          { 
            image: '',
            text: 'Ja',
            nextID: 2
        },{ 
            image: '',
            text: 'Nej',
            nextID: 3
        }
       
      ]
    },


    {
        id : 2,
        question : "Vem har skappat JavaScript?",
        choices : [
            { 
              image: '',
              text: 'Brenden Eich',
              nextID: 4
          },{ 
              image: '',
              text: 'Elon Musk',
              nextID: 3
          }

        ]
      },



      {
        id : 3,
        question : "Du är inte redo!!!!",
        choices : [
            { 
              image: '',
              text: 'Ja',
              nextID: 2
          },{ 
              image: '',
              text: 'Nej',
              nextID: 1
          }
         
        ]
      },



      {
        id : 4,
        question : "Vilken är JavaScript bibliotek?",
        choices : [
            { 
              image: './src/image/React.png',
              text: 'React JS',
              nextID: 5
          },{ 
              image: '',
              text: 'JSX',
              nextID: 3
          },
        ]
      },



      {
        id : 5,
        question : "",
        choices : [
            { 
              image: '',
              text: 'Ja',
              nextID: 2
          },{ 
              image: '',
              text: 'Nej',
              nextID: 3
          }
         
        ]
      },

      

      {
        id : 6,
        question : "",
        choices : [
            { 
              image: '',
              text: 'Ja',
              nextID: 2
          },{ 
              image: '',
              text: 'Nej',
              nextID: 3
          }
         
        ]
      },

      


      {
        id : 7,
        question : "welcommen, Är ni redo?",
        choices : [
            { 
              image: '',
              text: 'Ja',
              nextID: 2
          },{ 
              image: '',
              text: 'Nej',
              nextID: 3
          }
         
        ]
      },

      

      {
        id : 8,
        question : "welcommen, Är ni redo?",
        choices : [
            { 
              image: '',
              text: 'Ja',
              nextID: 2
          },{ 
              image: '',
              text: 'Nej',
              nextID: 3
          }
         
        ]
      },

      

      {
        id : 9,
        question : "welcommen, Är ni redo?",
        choices : [
            { 
              image: '',
              text: 'Ja',
              nextID: 2
          },{ 
              image: '',
              text: 'Nej',
              nextID: 3
          }
         
        ]
      },

      

      {
        id : 10,
        question : "welcommen, Är ni redo?",
        choices : [
            { 
              image: '',
              text: 'Ja',
              nextID: 2
          },{ 
              image: '',
              text: 'Nej',
              nextID: 3
          }
         
        ]
      },
  
      


  ]
