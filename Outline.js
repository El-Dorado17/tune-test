/*

Project: Tune Test
Description: Application with various music-theory questions

Initial feautres:
    -Multiple Choice Answers
    -Text questions
    -Correct/Incorrect feedback immediate
    -End-of-test indicator


Stretch features:
    -Pictures included with some questions
    -Audio file questions
    -input/type-your-answer 
    -score

*/


/*

Files:
    Database.js
        -Holds list of question, answer, images, and incorrect answers
                const questions = [
            {
                question: "What year is known as Y2K?",
                answers: [
                    { text: '2000', correct: true },
                    { text: '1999', correct: false }
                ]
            },
        ]

    Test.js
        -imports questions
        -form displaying one random question
        -button per answer
        -button to move to next question

*/