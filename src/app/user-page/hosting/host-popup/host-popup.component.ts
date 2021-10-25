
import { Component, ElementRef, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Game } from "src/app/model/game.model";
import { Model } from "src/app/model/repository.model";

@Component({
    selector:'host-popup',
    templateUrl: 'host-popup.component.html',
    styleUrls: ['/host-popup.component.css']
})
export class HostPopupComponent{
    @ViewChild('myModal', {static: false}) modal: ElementRef;
    games: Game[];
    constructor(private model: Model, private router: Router){
        this.games = model.getGames();
    }
    open(){
        this.modal.nativeElement.style.display = 'block';
    }

    host(num: Number){
        this.router.navigateByUrl('host/'+ num);
    }

    close(){
        this.modal.nativeElement.style.display = 'none';
    }
}