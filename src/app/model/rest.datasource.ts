import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Game } from "./game.model";

const PROTOCOL = "http";
const PORT = 3500

@Injectable()
export class RestDataSource {
    baseUrl: string;
    auth_token: string;

    constructor(private http: HttpClient) {
        this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    }
    registration(user: any){
        return this.http.post('https://localhost:44313/api/ApplicationUser/Register', user)
    }
    authenticate(user: string, pass: string): Observable<boolean> {
        return this.http.post<any>(this.baseUrl + "login", {
            name: user, password: pass
        }).pipe(map(response => {
            this.auth_token = response.success ? response.token : null;
            return response.success
        }));
    }

    saveGame(game: Game): Observable<Game>{
        return this.http.post<Game>(this.baseUrl + "games", game);
    }

    getGames(): Observable<Game[]> {
        return this.http.get<Game[]>(this.baseUrl + "games");
    }

    updateGame(game: Game): Observable<Game>{
        return this.http.put<Game>(`${this.baseUrl}products/${game.id}`, game);
    }
    deleteGame(id: number): Observable<Game>{
        return this.http.delete<Game>(`${this.baseUrl}games/${id}`);
    }

}