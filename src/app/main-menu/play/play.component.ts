import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/model/shared/auth.service';
import { SignalRService } from 'src/app/signal-r.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
 styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {
  formModel = {
    GameID:'',
    PlayerName:''
  }


  constructor(private router: Router, private auth: AuthService, private hub: SignalRService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    this.auth.play(form.value).subscribe(
      (res: any) => {
        localStorage.setItem('gameID', this.formModel.GameID);
        localStorage.setItem('userID', res);
        this.router.navigateByUrl("/lobby");
      },
      err => {
        console.log(err);
      }
    )
  }
}
