module.exports = function() {
    return {
        games: [{
            id: 1,
            owner: "admin",
            name: "Valami0",
            questions: [
                { question: "a", options: ["a", "b", "c", "d"] },
                { question: "b", options: ["a", "b", "c", "d"] },
                { question: "c", options: ["a", "b", "c", "d"] },
                { question: "d", options: ["a", "b", "c", "d"] }
            ],
            answers: [
                { questionId: 0, optionNum: 0 },
                { questionId: 1, optionNum: 1 },
                { questionId: 2, optionNum: 2 },
                { questionId: 3, optionNum: 3 }
            ]
        }, {
            id: 2,
            owner: "admin",
            name: "Valami1",
            questions: [
                { question: "a", options: ["a", "b", "c", "d"] },
                { question: "b", options: ["a", "b", "c", "d"] },
                { question: "c", options: ["a", "b", "c", "d"] },
                { question: "d", options: ["a", "b", "c", "d"] }
            ],
            answers: [
                { questionId: 0, optionNum: 0 },
                { questionId: 1, optionNum: 1 },
                { questionId: 2, optionNum: 2 },
                { questionId: 3, optionNum: 3 }
            ]
        }]
    }
}