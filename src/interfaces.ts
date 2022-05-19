

export interface GameStep {
    id : number
    question : string
    choices : [
        {
    image : string
    text : string
    nextID : number
    },{
        image : string
        text : string
        nextID : number
        }
    ]
}




  