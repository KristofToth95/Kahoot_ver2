import { User } from "./user.model";

export class Game {
    
    public id?: number;
    public owner?: string;
    public name?: string;
    public questions: Question[] = [];
    public users?: User[] = []; 

    addQuestion(question: Question) {
        this.questions.push(question);
    }

    // addUser(user: User){
    //     let t = this.users.find(u => u.id == user.id);
    //     if(t == null || t == undefined){
    //         this.users.push(user);
    //     }
    // }
}
export class Question {
    constructor(
        public question?: string,
        public options: Answer[] = []
    ) { }
}
export class Answer {
    constructor(
        public text: string,
        public correctAnswer: boolean = false
    ) { }
}