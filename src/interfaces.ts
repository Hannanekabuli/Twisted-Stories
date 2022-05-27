

export interface GameStep {
    id : number
    question : string
    choices : [
        {
    text : string
    nextID : number
    },{
        text : string
        nextID : number
        }
    ]
}




  