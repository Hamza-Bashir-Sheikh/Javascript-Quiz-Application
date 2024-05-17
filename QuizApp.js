const quiz = [
  {
    question: "What is the correct syntax to print a message in the console?",
    options: [
      "console.print('Hello World')",
      "console.output('Hello World')",
      "console.log('Hello World')",
      "print.console('Hello World')",
    ],
    answer: "console.log('Hello World')",
  },
  {
    question: "How do you create a function in JavaScript?",
    options: [
      "function myFunction()",
      "def myFunction()",
      "func myFunction()",
      "create myFunction()",
    ],
    answer: "function myFunction()",
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    options: ["#", "//", "<!--", "**"],
    answer: "//",
  },
  {
    question: "Which operator is used to assign a value to a variable?",
    options: ["*", "_", "=", "x"],
    answer: "=",
  },
  {
    question: "How do you declare a JavaScript variable?",
    options: ["variable carName", "var carName", "v carName", "carName var"],
    answer: "var carName",
  },
  {
    question:
      "How do you write a conditional statement in JavaScript for 'if x equals 5'?",
    options: ["if x == 5", "if x = 5", "if (x == 5)", "if (x = 5)"],
    answer: "if (x == 5)",
  },
  {
    question: "How do you create an array in JavaScript?",
    options: [
      "var colors = 'red', 'green', 'blue'",
      "var colors = 1 = (red), 2 = (green), 3 = (blue)",
      "var colors = (1:'red', 2:'green', 3:'blue')",
      "var colors = ['red', 'green', 'blue']",
    ],
    answer: "var colors = ['red', 'green', 'blue']",
  },
  {
    question: "How do you find the number with the highest value of x and y?",
    options: ["Math.max(x, y)", "ceil(x, y)", "top(x, y)", "Math.ceil(x, y)"],
    answer: "Math.max(x, y)",
  },
  {
    question: "How can you add a comment in a JavaScript code?",
    options: [
      "<!-- This is a comment -->",
      "// This is a comment",
      "/* This is a comment */",
      "Both B and C",
    ],
    answer: "Both B and C",
  },
  {
    question: "Which event occurs when the user clicks on an HTML element?",
    options: ["onmouseclick", "onmouseover", "onchange", "onclick"],
    answer: "onclick",
  },
];

const questionElement = document.getElementById("quiz-question");
const optionElements = [
  document.getElementById("text_option_a"),
  document.getElementById("text_option_b"),
  document.getElementById("text_option_c"),
  document.getElementById("text_option_d"),
];
const submitButton = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const currentQuizData = quiz[currentQuestion];
  questionElement.textContent = currentQuizData.question;
  optionElements[0].textContent = currentQuizData.options[0];
  optionElements[1].textContent = currentQuizData.options[1];
  optionElements[2].textContent = currentQuizData.options[2];
  optionElements[3].textContent = currentQuizData.options[3];
}

function getSelected() {
  const answerElements = document.querySelectorAll(".answer");
  let answer;
  answerElements.forEach((answerElement, index) => {
    if (answerElement.checked) {
      answer = optionElements[index].textContent;
    }
  });
  return answer;
}

function deselectAnswers() {
  const answerElements = document.querySelectorAll(".answer");
  answerElements.forEach((answerElement) => (answerElement.checked = false));
}

submitButton.addEventListener("click", () => {
  const selectedAnswer = getSelected();
  if (selectedAnswer) {
    if (selectedAnswer === quiz[currentQuestion].answer) {
      score++;
    }
    currentQuestion++;
    if (currentQuestion < quiz.length) {
      deselectAnswers();
      loadQuestion();
    } else {
      document.querySelector(".quiz-container").innerHTML = `
                <h2 class="heading2" >You answered ${score}/${quiz.length} questions correctly</h2>
                <button id="btn" onclick="location.reload()">Reload</button>
            `;
    }
  }
});

loadQuestion();
