import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/model/shared/auth.service';
import { UserModel } from 'src/app/model/user-model/user-repository.model';
import { User } from 'src/app/model/shared/user.model';
import { SignalRService } from 'src/app/signal-r.service';

@Component({
  selector: 'app-game-lobby',
  templateUrl: './game-lobby.component.html',
  styleUrls: ['./game-lobby.component.css'
  ]
})
export class GameLobbyComponent implements OnInit {

  users: User[];
  constructor(private model: UserModel, private auth: AuthService, private route: Router, private signalRService: SignalRService) {

  }
  get GameID() {
    return localStorage.getItem('gameID');
  }
  ngOnInit(): void {
    this.getUsers();
    this.signalRService.addNewUser(this.GameID.toString());
    this.signalRService.connection.on("userJoined", () => {
      this.getUsers();
    })
    this.signalRService.connection.on("gameStarted", () => {
      console.log("valami");
      this.start();
    })
  }

  async getUsers() {
    this.users = this.model.getUsers(Number(this.GameID));
  }

  start() {
    console.log("start");
    if (this.auth.getGameStart) {
      this.route.navigateByUrl("/game")
    }
  }

}
