// Sample data
const quizDB = [{
        question: "Q1: What is the full form of HTML?",
        a: "Hello To My Land",
        b: "Hey Text Markup Language",
        c: "HyperText Makeup Language",
        d: "Hypertext Markup Language",
        ans: "ans4"
    },
    {
        question: " Q2: What is the full form of CSS?",
        a: "Cascading Style Sheets",
        b: "Cascading Style Sheep",
        c: "Cartoon Style Sheets",
        d: "Cascading Super Sheets",
        ans: "ans1"
    },

    {
        question: " Q3: What is the full form of HTTP?",
        a: "Hypertext Transfer Product",
        b: "Hypertext Test Protocol",
        c: "Hey Transfer Protocol",
        d: "Hypertext Transfer Protocol",
        ans: "ans4"
    },
    {
        question: "Q4: What is the full form of JS?",
        a: "JavaScript",
        b: "JavaSuper",
        c: "JustScript",
        d: "JordenShoes",
        ans: "ans1"
    },
    {
        question: " Q5: Choose the correct HTML element for the largest heading:",
        a: "<h1>",
        b: "<h6>",
        c: "<head>",
        d: "<heading>",
        ans: "ans1"
    },
    {
        question: " Q6: There are ___ levels of heading in HTML",
        a: "Three",
        b: "Four",
        c: "Five",
        d: "Six",
        ans: "ans4"
    },
    {
        question: " Q7: Which of the following tags do not require a terminator?",
        a: "<u>",
        b: "<br>",
        c: "<b>",
        d: "none of the above",
        ans: "ans2"
    },
    {
        question: " Q8: To get the ordered list we use",
        a: "<h1>",
        b: "<ul>",
        c: "<ol>",
        d: "<ml>",
        ans: "ans3"
    },
    {
        question: " Q9:In HTML ______ tag contains the information about the current document such as title etc.",
        a: "Body",
        b: "TD",
        c: "HEAD",
        d: "None of the above",
        ans: "ans3"
    },
    {
        question: " Q10: Which one of the following tags is used to insert graphics on the web page?",
        a: "<IMAGE>",
        b: "<IMAGES>",
        c: "<IMG>",
        d: "<GRAPHICS>",
        ans: "ans3"
    },
    {
        question: " Q11: The tag to give visual division between sections of the page and which causes the browser to draw an embossed line is",
        a: "<HL>",
        b: "<HR>",
        c: "<UR>",
        d: "None of the above",
        ans: "ans2"
    }

];

// Load Questions

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0


const loadQuestion = () => {

    const questionList = quizDB[questionCount];

    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;

}

const deselectAll = () => {
    answers.forEach(currCheckedAns => currCheckedAns.checked = false);
}


loadQuestion();

const getCheckAnswer = () => {

    let answer;

    answers.forEach(curAnsElem => {
        if (curAnsElem.checked) {
            answer = curAnsElem.id
        }
    })

    return answer;

}

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if (checkedAnswer === quizDB[questionCount].ans) {
        score++;
    }
    // else{
    //     console.log("no");
    // }

    questionCount++;
    deselectAll();

    if (questionCount < quizDB.length) {
        loadQuestion();

    } else {
        showScore.innerHTML = `
            <h3> You scored ${score}/${quizDB.length} ✌</h3>

            <button class="btn" onclick="location.reload()">Play Again</button>
        `;

        showScore.classList.remove('scoreArea');
    }
});