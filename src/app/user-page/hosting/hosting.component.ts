import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Game } from "src/app/model/shared/game.model";
import { Model } from "src/app/model/admin-model/repository.model";
import { start } from "repl";
import { SignalRService } from "src/app/signal-r.service";
import { UserModel } from "src/app/model/user-model/user-repository.model";
import { User } from "src/app/model/shared/user.model";
import { AuthService } from "src/app/model/shared/auth.service";
import { async } from "rxjs/internal/scheduler/async";

@Component({
    selector: 'hosting',
    templateUrl: '/hosting.component.html',
    styleUrls: ['/hosting.component.css']
})
export class HostingComponent{
    game: Game = new Game();
    gameID: number
    users: User[];
    constructor(private router: Router, private activeRoute: ActivatedRoute, 
        private model: Model, private signalRService: SignalRService, private userModel: UserModel, private auth: AuthService){
        
        //console.log(this.game);
    }

    ngOnInit(){
        this.activeRoute.params.subscribe(params => {
            this.gameID = params["id"];
            this.getUsers();
            Object.assign(this.game, this.model.getGame(this.gameID));
        })
        this.model.startJoining(this.gameID);
        this.signalRService.addNewUser(this.gameID.toString());
        this.signalRService.connection.on("userJoined", () =>{
            this.getUsers();
        })
    }
    async getUsers(){
        this.users = this.userModel.getUsers(this.gameID);
        console.log(this.users);
    }
    startGame(){
        console.log(this.gameID);
        this.model.startGame(this.gameID);
        this.router.navigateByUrl('hostgame/'+ this.gameID);
    }
}