import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Game } from "../shared/game.model";

const PROTOCOL = "https";
const PORT = 44313;

@Injectable()
export class AdminDataSource{
    baseUrl: string;

    constructor(private http: HttpClient) {
        this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/api/admin`;
    }

    saveGame(game: Game): Observable<Game>{
        return this.http.post<Game>(this.baseUrl + "games", game);
    }

    getGames(): Observable<Game[]> {
        return this.http.get<Game[]>(this.baseUrl);
    }

    updateGame(game: Game): Observable<Game>{
        return this.http.put<Game>(`${this.baseUrl}products/${game.gameID}`, game);
    }
    deleteGame(id: number): Observable<Game>{
        return this.http.delete<Game>(`${this.baseUrl}games/${id}`);
    }

}