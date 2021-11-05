import * as internal from "stream";
import { User } from "./user.model";

export class Game {
    
    public gameID?: number;
    public applicationUserID?: string;
    public name?: string;
    public canJoin: boolean;
    public isStarted:boolean;
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
    public questionID?: number;
    public text: string;
    public options: Answer[] = [];
    public gameID?: number;
}
export class Answer {
    constructor(
        public text: string,
        public correctAns?: boolean,
        public answerID?: number,
        public questionID?: number
    ) { }
}