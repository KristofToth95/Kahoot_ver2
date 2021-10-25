import { Component } from "@angular/core";
import { Form, FormArray, FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Answer, Game, Question } from "src/app/model/game.model";
import { Model } from "src/app/model/repository.model";

@Component({
    selector: 'creator',
    templateUrl: './creator.component.html',
    styleUrls: ['/creator.component.css']
})
export class CreatorComponent {
    game: Game = new Game();
    question: Question;
    defaultOptionNum: number = 4;
    slideNum: number = 0;
    editing: boolean = false;
    slideForm2 = this.fb.group({
        slides: this.fb.array([
            this.fb.group({
                question: '',
                options: this.fb.array([])
            })
        ])
    });

    constructor(private fb: FormBuilder, private router: Router, activeRoute: ActivatedRoute, model: Model) {
        
        activeRoute.params.subscribe(params => {
            this.editing = params["mode"] == "edit";
            let id = params["id"];
            Object.assign(this.game, model.getGame(id) || new Game());
        })

        if (this.editing) {
            this.editGame();
        } else{
            this.defaultOptions();
        }

    }
    editGame() {
        for (let i = 0; i < this.game.questions.length; i++) {
            this.slides.push(this.newSlide(this.game.questions[i].question));
            for(let j = 0; j < this.game.questions[i].options.length; j++){
                this.getOptions(i).push(this.newOption(this.game.questions[i].options[j].text, this.game.questions[i].options[j].correctAnswer));
            }
        }
    }
    defaultOptions() {
        for (let i = 0; i < this.defaultOptionNum; i++) {
            this.addOption();
        }
    }
    get slides() {
        return this.slideForm2.get('slides') as FormArray
    }
    newSlide(question?: string): FormGroup {
        return this.fb.group({
            question: '' || question,
            options: this.fb.array([])
        })
    }
    addSlide() {
        this.slides.push(this.newSlide());
        this.slideNum = this.slides.length - 1;
        this.defaultOptions();
    }
    removeSlide(num: number) {
        this.slides.removeAt(num);
    }
    get options() {
        return this.slides.at(this.slideNum).get('options') as FormArray;
        //return this.slideForm.get('options') as FormArray
    }

    newOption(option?: string, correct?: boolean): FormGroup {
        return this.fb.group({
            text: '' || option,
            correct: 'false' || correct
        });
    }
    addOption() {
        this.options.push(this.newOption());
    }
    correctOption(num: number) {
        this.options.at(num).value['correct'] == "true" ? this.options.at(num).value['correct'] = "false" : this.options.at(num).value['correct'] = "true";
    }
    removeOption(num: number) {
        this.options.removeAt(num);
    }
    // saveQuestion(){
    //     this.question.question = this.options.value['question'];
    //     for(let i = 0; i < this.options.controls.length; i++){
    //         this.question.options.push(new Answer(this.options.at(i).value['text'], this.options.at(i).value['correct']));
    //         //console.log(this.options.at(i).value);
    //     }
    //     console.log(this.slideForm2.value);
    //     //this.game.addQuestion(this.question);
    // }
    changeSlide(num: number) {
        this.slideNum = num;
    }
    getOptions(num: number): FormArray {
        return this.slides.at(num).get('options') as FormArray;
    }
    saveForm() {
        for (let i = 0; i < this.slides.length; i++) {
            this.question = new Question();
            this.question.question = this.slides.at(i).value['question'];
            for (let j = 0; j < this.getOptions(i).length; j++) {
                this.question.options.push(new Answer(this.getOptions(i).at(j).value['text'], this.getOptions(i).at(j).value['correct']))
            }
            console.log(this.question);
        }
    }
}