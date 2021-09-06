
export class Game {
    public id?: number;
    public owner?: string;
    public name?: string;
    public questions: Question[] = [];
    public answers: Answer[] = [];

    addQuestion(question: Question, answer: Answer) {
        this.questions.push(question);
        answer.questionId = this.questions.length - 1;
        this.answers.push(answer);
    }
}
export class Question {
    constructor(
        public question?: string,
        public options?: string[]
    ) { }
}
export class Answer {
    constructor(
        public questionId?: number,
        public optionNum?: number
    ) { }
}