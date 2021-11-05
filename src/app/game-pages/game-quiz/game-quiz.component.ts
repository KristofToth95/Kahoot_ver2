import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/model/shared/auth.service';
import { Answer, Question } from 'src/app/model/shared/game.model';
import { User } from 'src/app/model/shared/user.model';
import { UserModel } from 'src/app/model/user-model/user-repository.model';

@Component({
  selector: 'app-game-quiz',
  templateUrl: './game-quiz.component.html',
  styleUrls: ['./game-quiz.component.css'
  ]
})
export class GameQuizComponent implements OnInit {
  questions: Question[] = [];
  user: User;
  questionNum: number;
  selectedOption: Answer;
  constructor(private model: UserModel, private auth: AuthService) { 
   this.questionNum = 0;
   this.model.getQuestions(this.auth.gameID);
  }
  ngOnInit(): void {

  }

  get getQuestion(): String{
    try{
      return this.model.Questions[this.questionNum].text;
    }
    catch{}
  }
  get getOptions(){
    try{
      return this.model.Questions[this.questionNum].options;
    }
    catch{}
  }
  nextQuestion(){
    this.questionNum++;
  }
  chooseAnswer(o: Answer){
    if(this.selectedOption == null){
      this.selectedOption = o;
      this.model.postAnswer(this.auth.userID, this.selectedOption.answerID);
      console.log(o);
    }

  }

}
