import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RestDataSource } from "../model/shared/rest.datasource";
import { GameQuizComponent } from './game-quiz/game-quiz.component';

@NgModule({
    imports: [
        HttpClientModule,
        BrowserModule
    ],
    providers:[
        RestDataSource
    ],
    declarations: [
      GameQuizComponent
    ]
})
export class GamePageModule{}