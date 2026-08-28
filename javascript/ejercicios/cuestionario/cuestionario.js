const questions = [
    {
        category: 'JavaScript',
        question: '¿Qué devuelve typeof []?',
        choices: ['array', 'object', 'null'],
        answer: 'object',
    },
    {
        category: 'JavaScript',
        question: "¿Cuál es el resultado de 2 + '2'?",
        choices: ['4', '22', 'NaN'],
        answer: '22',
    },
    {
        category: 'HTML',
        question: '¿Qué etiqueta crea un enlace?',
        choices: ['<a>', '<link>', '<href>'],
        answer: '<a>',
    },
    {
        category: 'CSS',
        question: '¿Qué propiedad cambia el color de texto?',
        choices: ['background', 'color', 'font-style'],
        answer: 'color',
    },
    {
        category: 'General',
        question: '¿Qué lenguaje se ejecuta en el navegador?',
        choices: ['Python', 'Java', 'JavaScript'],
        answer: 'JavaScript',
    },
];
let questionX;
let answerX;

let sizeQuestions = Object.keys(questions).length;

let indiceQuestions = Math.floor(Math.random() * sizeQuestions);

function getRandomQuestion(objectQuestion) {
    let questionX = objectQuestion[indiceQuestions];
    return questionX;
}
console.log(getRandomQuestion(questions));

// questionX =
//     getRandomQuestion(questions) ??
//     'No se obtuvo ninguna pregunta, siga intentando';

function getRandomComputerChoice(choices) {
    let size = choices.length;
    let indiceArray = Math.floor(Math.random() * size);
    return choices[indiceArray];
}

function getResults(questionObj, computerChoice) {
    if (computerChoice === questionObj.answer) {
        return "The computer's choice is correct!";
    }
    return `The computer's choice is wrong. The correct answer is: ${questionObj.answer}`;
}

const currentQuestion = getRandomQuestion(questions);
const computerChoice = getRandomComputerChoice(currentQuestion.choices);

console.log(getResults(currentQuestion, computerChoice));
