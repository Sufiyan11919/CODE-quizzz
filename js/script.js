const allQuestions = [
    {
        title: "What is full form of CSS?",
        a:"Cascading Style Source",
        b:"Cascading Style Sheets",
        c:"Cascading Source Sheets",
        d:"Cascade Style Sheets",
        answer: "ans2"
    },
    {
        title: "What is full form of HTML?",
        a:"HyperText Markup Language",
        b: "HyperText Markup List",
        c:"HyperText Makeup Language",
        d:"Hypertool Markup Language",
        answer: "ans1"
    },
    {
        title: "What is full form of HTTP?",
        a:"Hypertext Transfer protocol",
        b: "Hypertext Testing Protocol",
        c:"Hypertext Transfer Print",
        d: "Hypertext testing Print",
        answer: "ans1"
    },
    {
        title: "which is not a datatype in Javascript?",
        a:"booolean",
        b: "integer",
        c: "string",
        d:  "decimal",
        answer: "ans4"
    },
    {
        title: "which operator can be used instead of if statement?",
        a:"Ternary",
        b:"spread",
        c: "conditional",
        d:"for each",           
        answer: "ans1"
    },
  
  ];

const question = document.querySelector('.questions');
const option1 = document.querySelector('.op1');
const option2 = document.querySelector('.op2');
const option3 = document.querySelector('.op3');
const option4 = document.querySelector('.op4');

const submit = document.querySelector('#submit')

let count = 0

const load_questions= ()=>{
    const element = allQuestions[count]
    question.innerHTML = element.title;
    opt1.innerHTML = allQuestions[0].a;
    option2.innerHTML = element.b;
    option3.innerHTML = element.c;
    option4.innerHTML = element.d;

}
load_questions();