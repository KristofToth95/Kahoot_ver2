
import { Component, ElementRef, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Game } from "src/app/model/shared/game.model";
import { Model } from "src/app/model/admin-model/repository.model";
import { SignalRService } from "src/app/signal-r.service";

@Component({
    selector:'host-popup',
    templateUrl: 'host-popup.component.html',
    styleUrls: ['/host-popup.component.css']
})
export class HostPopupComponent{
    @ViewChild('myModal', {static: false}) modal: ElementRef;
    games: Game[];
    constructor(private model: Model, private router: Router, private signalRService: SignalRService){
        this.games = model.getGames();
    }
    open(){
        this.modal.nativeElement.style.display = 'block';
    }

    host(num: number){
        this.signalRService.addNewUser(num.toString());
        this.router.navigateByUrl('host/'+ num);
    }

    close(){
        this.modal.nativeElement.style.display = 'none';
    }
}