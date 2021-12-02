import { templateJitUrl } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { Answer, Question } from "../shared/game.model";
import { RestDataSource } from "../shared/rest.datasource";
import { User } from "../shared/user.model";

@Injectable()
export class UserModel {
    private users: User[] = new Array<User>();
    private questions: Question[] = new Array<Question>();

    constructor(private dataSource: RestDataSource) { }

    getUsers(id: number): User[] {
        this.dataSource.getPlayers(id).subscribe(data => {
            Object.assign(this.users, data);
        })
        return this.users;
    };
    getQuestions(id: number){
        this.dataSource.getQuestions(id).subscribe(data => {
            Object.assign(this.questions, data);
            console.log(this.questions);
        })
    }

    postAnswer(playerID: number, answerID: number){
        this.dataSource.sendChoosenAnswer(playerID, answerID).subscribe(
            (res: any) => {
                return true
            }
        )
    }
    get Questions(){
        return this.questions;
    }


}