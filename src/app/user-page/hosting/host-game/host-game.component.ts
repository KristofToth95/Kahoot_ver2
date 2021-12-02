import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription, timer } from "rxjs";
import { Model } from "src/app/model/admin-model/repository.model";
import { Game } from "src/app/model/shared/game.model";
import { SignalRService } from "src/app/signal-r.service";

@Component({
    selector: 'host-game',
    templateUrl: '/host-game.component.html',
    styleUrls: ['/host-game.component.css']
})
export class HostGameComponent {
    gameID: number
    game: Game;
    questionNum: number;
    countdown: Subscription;
    counter = 30;
    private time;
    constructor(private signalRService: SignalRService, private router: Router,
        private model: Model, private activeRoute: ActivatedRoute) {
        this.timer();
    }

    ngOnInit() {
        this.activeRoute.params.subscribe(params => {
            let id = params["id"];
            this.game = this.model.getGame(id);
        });
        this.signalRService.connection.on("timer", (data) => {
            console.log(data);
        })
        this.questionNum = 0;
    }
    timer() {
        this.time = setInterval(() => {
            if (this.counter != 0)
                this.counter--;
            console.log(this.counter);
            if (this.counter == 0) {
                this.nextQuestion();
            }
        }, 1000);
    }
    get question(): string {
        try {
            return this.game.questions[this.questionNum].text;
        }
        catch { }
    }
    get options() {
        try {
            return this.game.questions[this.questionNum].options;
        }
        catch { }
    }
    nextQuestion() {
        this.signalRService.connection.invoke("nextQuestion", localStorage.getItem("gameID"))
            .catch(err => console.error(err));
        if (this.questionNum >= this.game.questions.length -1)
            this.router.navigateByUrl("/toplist");

        this.questionNum++;
        this.counter = 30;
        clearInterval(this.time);
        console.log(this.counter);
        this.timer();


    }
    ngOnDestroy() {
        clearInterval(this.time);
    }
}