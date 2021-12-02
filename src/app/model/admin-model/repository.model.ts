import { Injectable } from "@angular/core";
import { TouchSequence } from "selenium-webdriver";
import { Game } from "../shared/game.model";
import { User } from "../shared/user.model";
import { AdminDataSource } from "./admin.datasource";

@Injectable()
export class Model {
    private games: Game[] = new Array<Game>();
    private locator = (g: Game, id: number) => g.gameID == id;

    constructor(private dataSource: AdminDataSource) {
        this.dataSource.getGames().subscribe(data => {
             Object.assign(this.games, data);
            });
    }

    getGames(): Game[] {
        return this.games;
    }
    getGame(id: number): Game {
        console.log(this.games.find(g => g.gameID == id));
        return this.games.find(g => g.gameID == id);
    }
    startGame(id: number){
        if (id != 0 || id != null) {
            this.dataSource.startGame(id);
        }
    }
    startJoining(id: number){
        if (id != 0 || id != null) {
            this.dataSource.startJoining(id, localStorage.getItem("connectionId").toString());
        }
    }
    saveGame(game: Game) {
        if (game.gameID == 0 || game.gameID == null) {
            this.dataSource.saveGame(game).subscribe(p => this.games.push(p))
        } else {
            this.dataSource.updateGame(game).subscribe(p => {
                let index = this.games.findIndex(g => this.locator(g, p.gameID));
                this.games.splice(index, 1, p);
            })
        }

    }
   
    deleteGame(id: number) {
        this.dataSource.deleteGame(id).subscribe(p => {
            this.games.splice(this.games.findIndex(p => p.gameID == id), 1);
        })
    }

}