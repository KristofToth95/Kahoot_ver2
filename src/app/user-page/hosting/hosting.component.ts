import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Game } from "src/app/model/game.model";
import { Model } from "src/app/model/repository.model";

@Component({
    selector: 'hosting',
    templateUrl: '/hosting.component.html',
    styleUrls: ['/hosting.component.css']
})
export class HostingComponent{
    game: Game = new Game();

    constructor(private router: Router, private activeRoute: ActivatedRoute, private model: Model){
        
        //console.log(this.game);
    }

    ngOnInit(){
        this.activeRoute.params.subscribe(params => {
            let id = params["id"];
            Object.assign(this.game, this.model.getGame(id));
        })
    }

    get users(){
        return this.game.users;
    }
}