import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/model/shared/auth.service';
import { UserModel } from 'src/app/model/user-model/user-repository.model';
import { User } from 'src/app/model/shared/user.model';

@Component({
  selector: 'app-game-lobby',
  templateUrl: './game-lobby.component.html',
  styleUrls: ['./game-lobby.component.css'
  ]
})
export class GameLobbyComponent implements OnInit {

  users: User[];
  constructor(private model: UserModel, private auth: AuthService, private route: Router) {

  }
  get GameID(){
    return localStorage.getItem('gameID');
  }
  ngOnInit(): void {
    this.users = this.model.getUsers(this.auth.gameID);
  }

  start(){
    if(this.auth.getGameStart){
      this.route.navigateByUrl("/game")
    }
  
  }

}
