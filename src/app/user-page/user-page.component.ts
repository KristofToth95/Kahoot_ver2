import { Component, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Game } from "../model/game.model";
import { Model } from "../model/repository.model";
import { HostPopupComponent } from "./hosting/host-popup/host-popup.component";

@Component({
    selector: 'user-page',
    templateUrl: '/user-page.component.html',
    styleUrls: ['user-page.component.css']
})
export class UserPageComponent{

    games: Game[];
    @ViewChild('modal', {static: false}) modal: HostPopupComponent;
    constructor(private model: Model, private router: Router){
        this.games = model.getGames();
       // console.log(this.games);
    }

    editGame(game: Game){
        this.router.navigateByUrl(`/creator/edit/${game.id}`)  
    }

    openModal(){
        this.modal.open();
    }
}