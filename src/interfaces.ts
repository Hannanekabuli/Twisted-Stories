export interface Step {
    id: number, 
    question: string, 
    answers: {
       left: {text: string, path: number},
       right: {text: string, path: number}
    }
}
