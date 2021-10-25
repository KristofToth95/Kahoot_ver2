import { Injectable } from "@angular/core";
import { Game } from "./game.model";
import { RestDataSource } from "./rest.datasource";

@Injectable()
export class Model {
    private games: Game[] = new Array<Game>();
    private locator = (g: Game, id: number) => g.id == id;

    constructor(private dataSource: RestDataSource) {
        this.dataSource.getGames().subscribe(data => {
             Object.assign(this.games, data);
            });
    }

    getGames(): Game[] {
        return this.games;
    }

    getGame(id: number): Game {
        return this.games.find(p => this.locator(p, id));
    }

    saveGame(game: Game) {
        if (game.id == 0 || game.id == null) {
            this.dataSource.saveGame(game).subscribe(p => this.games.push(p))
        } else {
            this.dataSource.updateGame(game).subscribe(p => {
                let index = this.games.findIndex(g => this.locator(g, p.id));
                this.games.splice(index, 1, p);
            })
        }

    }
   
    deleteGame(id: number) {
        this.dataSource.deleteGame(id).subscribe(p => {
            this.games.splice(this.games.findIndex(p => p.id == id), 1);
        })
    }

}