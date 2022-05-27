

export const gameDataList: GameStep[] = [{
    id: 1, 
    question: "Du sitter i klassrummet och din telefon ringer.",
    choices: {
        one: {text: 'Svara', path: 2},
        two: {text: 'Svara inte!', path: 3}
    }
},  
{
  id: 2, 
  question: "Det är din granne som vill berätta att din lägenhet brinner.",
  choices: {
          one: {text: 'Gå hem', path: 4},
          two: {text: 'Bryr dig inte', path: 3}
      }
  },
{
 id: 3, 
 question: "Men det kommer att ringa igen i din telefon!",
  choices: {
      one: {text: 'Svara', path: 2},
      two: {text: 'Svarar inte!', path: 1}
   }
 },
 {
  id: 4, 
  question: "När du kommer hem så står brandbilar utanför, du träffar en brandman i trappan.",
  choices: {
        one: {text: 'Fråga vad som har hänt', path: 5},
        two: {text: 'Spring in i lägenheten', path: 5}
  }
            
 },
 {
  id: 5, 
  question: "Brandmanen berättar att någon glömde att ta ut tårta från ungen och det var helt bränt, så larmet gick. ",
   choices: {
       one: {text: 'Du känner att du är gammal och tror att du är dement', path: 6},
       two: {text: 'Du behöver en läkare', path: 6}
  }
 },
  {
    id: 6, 
    question: "Men du kommer ihåg att du inte bakade tårta på morgonen och det är inte ditt lägenhet, du bor en trapp up!",
         choices: {
            one: {text: 'Gå in i lägenhet', path: 7},
            two: {text: 'Förklara för grannen som hon ringde fel', path: 7}
        }
    },
      {
        id: 7, 
        question: "Du är i din lägenhet nu.",
             choices: {
                one: {text: 'Du vill baka en tårta ', path: 8},
                two: {text: 'Du sitter med dina uppgifter', path: 8}
            }
        },
          {
            id: 8, 
            question: "Du fikar och sitter med dina uppgifter och tackar för spelet!",
                 choices: {
                    one: {text: 'Spela igen', path: 1},
                    two: {text: 'Nej, sluta', path: 8}
                }
            },
           
]