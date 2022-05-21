

export interface GameStep {
    id : number
    question : string
    image:string
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




  