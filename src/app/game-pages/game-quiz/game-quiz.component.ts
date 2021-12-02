import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { time } from 'console';
import { AuthService } from 'src/app/model/shared/auth.service';
import { Answer, Question } from 'src/app/model/shared/game.model';
import { User } from 'src/app/model/shared/user.model';
import { UserModel } from 'src/app/model/user-model/user-repository.model';
import { SignalRService } from 'src/app/signal-r.service';

@Component({
  selector: 'app-game-quiz',
  templateUrl: './game-quiz.component.html',
  styleUrls: ['./game-quiz.component.css'
  ]
})
export class GameQuizComponent implements OnInit {
  user: User;
  questionNum: number;
  selectedOption: Answer;
  counter = 30;
  private time;
  constructor(private model: UserModel, private auth: AuthService, private signalRService: SignalRService, private router: Router) {
    this.questionNum = 0;
    this.model.getQuestions(Number(localStorage.getItem('gameID')));
    this.timer();
  }
  ngOnInit(): void {
    this.signalRService.connection.on("NextQuestion", () => {
      if (this.questionNum >= this.model.Questions.length-1) {
        this.router.navigateByUrl("/toplist")
      }
      else {
        this.questionNum++;
        clearInterval(this.time);
        this.counter =30;
        this.timer();
        console.log(this.model.Questions.length, this.questionNum);
      }


    })
  }
  timer() {
    this.time = setInterval(() => {
      this.counter--;
      if (this.counter == 0) {
        clearInterval(this.time);
        this.counter = 30;
      }
    }, 1000);
  }
  get getQuestion(): String {
    try {
      return this.model.Questions[this.questionNum].text;
    }
    catch { }
  }
  get getOptions() {
    try {
      return this.model.Questions[this.questionNum].options;
    }
    catch { }
  }
  chooseAnswer(o: Answer) {
    if (this.selectedOption == null) {
      this.selectedOption = o;
      this.model.postAnswer(this.auth.userID, this.selectedOption.answerID);
    }

  }
  ngOnDestroy() {
    clearInterval(this.time);
  }

}
