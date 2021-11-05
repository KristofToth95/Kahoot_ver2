import { Component } from "@angular/core";
import { Form, FormArray, FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Answer, Game, Question } from "src/app/model/shared/game.model";
import { Model } from "src/app/model/admin-model/repository.model";

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
                option: this.fb.array([])
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
            this.slides.push(this.newSlide(this.game.questions[i].text));
            for(let j = 0; j < this.game.questions[i].options.length; j++){
                this.getOptions(i).push(this.newOption(this.game.questions[i].options[j].text, this.game.questions[i].options[j].correctAns));
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
            option: this.fb.array([])
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
    get option() {
        return this.slides.at(this.slideNum).get('option') as FormArray;
        //return this.slideForm.get('option') as FormArray
    }

    newOption(option?: string, correct?: boolean): FormGroup {
        return this.fb.group({
            text: '' || option,
            correct: 'false' || correct
        });
    }
    addOption() {
        this.option.push(this.newOption());
    }
    correctOption(num: number) {
        this.option.at(num).value['correct'] == "true" ? this.option.at(num).value['correct'] = "false" : this.option.at(num).value['correct'] = "true";
    }
    removeOption(num: number) {
        this.option.removeAt(num);
    }
    // saveQuestion(){
    //     this.question.question = this.option.value['question'];
    //     for(let i = 0; i < this.option.controls.length; i++){
    //         this.question.option.push(new Answer(this.option.at(i).value['text'], this.option.at(i).value['correct']));
    //         //console.log(this.option.at(i).value);
    //     }
    //     console.log(this.slideForm2.value);
    //     //this.game.addQuestion(this.question);
    // }
    changeSlide(num: number) {
        this.slideNum = num;
    }
    getOptions(num: number): FormArray {
        return this.slides.at(num).get('option') as FormArray;
    }
    saveForm() {
        for (let i = 0; i < this.slides.length; i++) {
            this.question = new Question();
            this.question.text = this.slides.at(i).value['question'];
            for (let j = 0; j < this.getOptions(i).length; j++) {
                this.question.options.push(new Answer(this.getOptions(i).at(j).value['text'], this.getOptions(i).at(j).value['correct']))
            }
            console.log(this.question);
        }
    }
}