import { GameStep } from "./interfaces"


export let gamesteps: GameStep[] = [
    {
      id : 1,
      question : "welcommen, Är ni redo för Quiz?",
      image: 'data:image/jpeg;base64,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',
      choices : [
          { 
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgR9shWJ7trYsmadMOSnkiHCeiJ8ToR1_jlA&usqp=CAU',
            text: 'Ja',
            nextID: 2
        },{ 
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfwxDwkYQp0J-C6Hc8UrQNhxgsZB7vI3OodA&usqp=CAU',
            text: 'Nej',
            nextID: 3
        }
       
      ]
    },


    {
        id : 2,
        question : "Vem har skappat JavaScript?",
        image: 'image/bild2.png',
        choices : [
            { 
              image: 'data:image/jpeg;base64,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',
              text: 'Brenden Eich',
              nextID: 4
          },{ 
              image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxnAz5nF6StlzUS7325iQJK35NO_R5hhRR4Q&usqp=CAU',
              text: 'Elon Musk',
              nextID: 3
          }

        ]
      },



      {
        id : 3,
        question : "Du är inte redo!!!!",
        image: '',
        choices : [
            { 
              image: '',
              text: 'Ta en kopp kaffe, fortsätta',
              nextID: 2
          },{ 
              image: '',
              text: 'Nej, fortsätt inte!',
              nextID: 1
          }
         
        ]
      },



      {
        id : 4,
        question : "Vilken är JavaScript bibliotek?",
        image: '',
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
        image: '',
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
        image: '',
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
        image: '',
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
        image: '',
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
        image: '',
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
        image: '',
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
