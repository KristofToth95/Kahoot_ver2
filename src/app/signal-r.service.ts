import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { AuthService } from './model/shared/auth.service';
import { UserModel } from './model/user-model/user-repository.model';
@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  connection: signalR.HubConnection;
  constructor(private model: UserModel, private auth: AuthService) { }

  public initiateSignalrConnection(): Promise<void>{
    return new Promise((resolve, reject) => {
      this.connection = new signalR.HubConnectionBuilder()
      .withUrl('https://localhost:44313/signalrdemohub')
      .withAutomaticReconnect()
      .configureLogging(signalR.LogLevel.Information)
      .build();

      this.connection
        .start()
        .then(() => {
          localStorage.setItem("connectionId", this.connection.connectionId);
          console.log(`SignalR connection success! connectionId: ${this.connection.connectionId} `);
          resolve();
        })
        .catch((error) =>{
          console.log(`SignalR connection error: ${error}`);
          reject();
        });
    })
  }
  public addNewUser(gameID: string) {
    this.connection.invoke('joinGroup', gameID)
    .catch(err => console.error(err));
    console.log("joined");
  }


  public gameStarted = () => {
    this.connection.invoke('StartGame', localStorage.getItem("gameID"))
    .catch(err =>console.error(err));
  }

}
