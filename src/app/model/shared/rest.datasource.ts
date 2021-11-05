import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Answer, Game, Question } from "./game.model";
import { User } from "./user.model";

const PROTOCOL = "https";
const PORT = 44313;

@Injectable()
export class RestDataSource {
    baseUrl: string;

    constructor(private http: HttpClient) {
        this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/api/`;
    }

    getPlayers(id: number): Observable<User[]>{
        return this.http.get<User[]>(`${this.baseUrl}Play/GetPlayers/${id}`)
    }

    getGameStart(id: number): Observable<boolean>{
        return this.http.get<boolean>(`${this.baseUrl}Play/GetGameStarted/${id}`)
    }
    sendChoosenAnswer(playerID: number, answerID: number){
        return this.http.post(`${this.baseUrl}Play/PostAnswer/${playerID}/${answerID}`, null);
    }

    getQuestions(gameID: number): Observable<Question[]>{
        return this.http.get<Question[]>(`${this.baseUrl}Play/GetQuestions/${gameID}`);
    }

    getOptions(questionID: number): Observable<Answer[]>{
        return this.http.get<Answer[]>(`${this.baseUrl}Play/GetOptions/${questionID}`);
    }


}