import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RestDataSource } from "../model/shared/rest.datasource";
import { GameQuizComponent } from './game-quiz/game-quiz.component';
import { ToplistComponent } from './toplist/toplist.component';

@NgModule({
    imports: [
        HttpClientModule,
        BrowserModule
    ],
    providers:[
        RestDataSource
    ],
    declarations: [
      GameQuizComponent,
      ToplistComponent
    ]
})
export class GamePageModule{}