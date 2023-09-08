const quesJSON = [
  {
    correctAnswer: "Three ",
    options: ["Two", "Three ", "Four", "Five"],
    question: "How many pieces of bun are in a Mcdonald's Big Mac?",
  },
  {
    correctAnswer: "L. Frank Baum",
    options: [
      "Suzanne Collins",
      "James Fenimore Cooper",
      "L. Frank Baum",
      "Donna Leon",
    ],
    question: "Which author wrote 'The Wonderful Wizard of Oz'?",
  },
  {
    correctAnswer: "Atlanta United",
    options: [
      "Atlanta United",
      "Atlanta Impact",
      "Atlanta Bulls",
      "Atlanta Stars",
    ],
    question: "Which of these is a soccer team based in Atlanta?",
  },
  {
    correctAnswer: "A Nanny",
    options: ["A Sow", "A Lioness", "A Hen", "A Nanny"],
    question: "A female goat is known as what?",
  },
  {
    correctAnswer: "P. L. Travers",
    options: [
      "J. R. R. Tolkien",
      "P. L. Travers",
      "Lewis Carroll",
      "Enid Blyton",
    ],
    question: "Which author wrote 'Mary Poppins'?",
  },
];

let score = 0;
let currentQuestion = 0;
let marks = quesJSON.length;

//Accessing all the elements:
const questionEl = document.getElementById("question");
const optionEl = document.getElementById("options");
const scoreEl = document.getElementById("score");
const nextEl = document.getElementById("next");

//  calling showquestion function
showQuestion();

//  next button event
nextEl.addEventListener("click", () => {
  // calling nextquestion function
  nextQuestion();

  scoreEl.textContent = `Score: ${score}/${marks}`;
});
// crating function for changing question after submit ans
function showQuestion() {
  // __________________________ destructuring____________________________//
  //  here we are destructring the obj to use the key as variable

  const { correctAnswer, options, question } = quesJSON[currentQuestion];

  // we can use direct question as a variable because of destructring
  // this will fetech the question from obj that we are cteate before
  // __________________________ taking quiz from json____________________________//

  questionEl.textContent = question;
  const suffledOption = shuffleOption(options);
  // here we call that function which we are creating and call them for suffling the options
  // and we are assine this varibel to foreach funtion to take random options
  suffledOption.forEach((opt) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    optionEl.appendChild(btn);

    // Event handling on the button:
    btn.addEventListener("click", () => {
      if (opt === correctAnswer) {
        score++;
      } else {
        score = score - 0.25;
      }
      console.log(score);
      scoreEl.textContent = `Score: ${score}/${marks}`;

      // calling next question function
      nextQuestion();
    });
  });
}

function nextQuestion() {
  currentQuestion++;
  // after completing the quiz we are creating opting null or empty
  optionEl.textContent = "";
  if (currentQuestion >= quesJSON.length) {
    // this will show quiz completed
    questionEl.textContent = "Quiz Completed!!";
    // removing next button event
    nextEl.remove();
  } else {
    showQuestion();
  }
}
// shuffling the option using destructring
// for make new option when the new quiz opned
function shuffleOption(options) {
  for (let i = options.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i + 1);
    // math.random is a function that will give any random number
    // in array length
    // and random will retrun decimal value so we have to use one mote
    //  function math.floor(math.random) this will give a number
    [options[i], options[j]] = [options[j], options[i]];
  }
  return options;
}
