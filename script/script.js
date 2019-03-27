const questions = [
  {
    title: "Who is the president of USA",
    A: "Donald Trump",
    B: "Mark Zuckerberg",
    C: "Bill Gates",
    D: "Anonymous",
    answer: "A"
  },
  {
    title: "What is the result of 5 + 5",
    A: "2",
    B: "5",
    C: "15",
    D: "10",
    answer: "D"
  },
  {
    title: "Who is the CEO of Facebook",
    A: "Bill Gates",
    B: "Mark Zuckerberg",
    C: "Justin Bieber",
    D: "Kim Jong Un",
    answer: "B"
  },
  {
    title: "Who is the father of Apple company",
    A: "Bill Gates",
    B: "Steve Jobs",
    C: "Donald Trump",
    D: "Kanye West",
    answer: "B"
  },
  {
    title: "A second-year college student is usually called a what?",
    A: "sophomore",
    B: "senior",
    C: "freshman ",
    D: "junior ",
    answer: "A"
  },
  {
    title: "Who is the Prime Minister of Canada",
    A: "Justin Trudeau",
    B: "Donald Trump",
    C: "Mark Zuckerberg",
    D: "Kim Jong Un",
    answer: "A"
  },
  {
    title: "Who is the teacher of WEB222 SII at Seneca this semester",
    A: "Viet",
    B: "Kareem Best",
    C: "David",
    D: "Others",
    answer: "B"
  },
  {
    title: "Which country is in the North of USA",
    A: "England",
    B: "Vietnam",
    C: "Mexico",
    D: "Canada",
    answer: "D"
  },
  {
    title: "Which animals below goes with 2 legs?",
    A: "tiger",
    B: "human",
    C: "cat",
    D: "snake",
    answer: "B"
  },
  {
    title: "How do you express 3/4 as a decimal?",
    A: ".25",
    B: ".50",
    C: ".75",
    D: ".90",
    answer: "C"
  },
  {
    title: "How is 4:00 pm expressed in military time?",
    A: "1600",
    B: "004",
    C: "0400 ",
    D: "4:00",
    answer: "A"
  },
  {
    title: "How is the Arabic numeral for '2' written?",
    A: "2",
    B: "II",
    C: "I",
    D: "ii",
    answer: "A"
  },
  {
    title:
      "How is the word 'ambulance' normally written on the front of American ambulances?",
    A: "in French",
    B: "in reverse",
    C: "in braille",
    D: "in gibberish",
    answer: "B"
  },
  {
    title: "How long is a single term in the US Senate?",
    A: "two years",
    B: "four years",
    C: "six years",
    D: "eight years",
    answer: "C"
  },
  {
    title: "How long is the time on an NBA shot clock?",
    A: "18 seconds",
    B: "24 seconds",
    C: "30 seconds",
    D: "35 seconds",
    answer: "B"
  },
  {
    title: "How many $100 bills does it take to equal one million dollars?",
    A: "one thousand",
    B: "five thousand",
    C: "ten thousand",
    D: "one hundred thousand",
    answer: "C"
  },
  {
    title: "How many axles does a standard automobile have?",
    A: "one",
    B: "two",
    C: "four",
    D: "eight",
    answer: "B"
  },
  {
    title: "How many digits are in a standard Visa credit card number?",
    A: "12",
    B: "15",
    C: "16",
    D: "20",
    answer: "C"
  },
  {
    title: "How many eyes does a Giraffe have?",
    A: "one",
    B: "two",
    C: "three",
    D: "four",
    answer: "B"
  },
  {
    title:
      "How many innings are there in a regular Major League Baseball game?",
    A: "seven",
    B: "eight",
    C: "nine",
    D: "ten",
    answer: "C"
  },
  {
    title: "How many keys are on a standard piano?",
    A: "20",
    B: "54",
    C: "88",
    D: "100",
    answer: "C"
  },
  {
    title: "How many men has actress Elizabeth Taylor been divorced from?",
    A: "five",
    B: "six",
    C: "seven",
    D: "eight",
    answer: "C"
  },
  {
    title: "How many ounces are in a pound?",
    A: "4",
    B: "12",
    C: "16",
    D: "32",
    answer: "C"
  },
  {
    title: "How many periods are there in an ice hockey game?",
    A: "One",
    B: "Two",
    C: "Three",
    D: "Four",
    answer: "C"
  },
  {
    title: "How many quarts are there in a gallon?",
    A: "one",
    B: "two",
    C: "three",
    D: "four",
    answer: "D"
  },
  {
    title: "How many ribs are there in the human body?",
    A: "18",
    B: "24",
    C: "30",
    D: "42",
    answer: "B"
  },
  {
    title:
      "How many ships did Columbus set sail with on his initial voyage to the New World?",
    A: "Two",
    B: "Three",
    C: "Five",
    D: "Ten",
    answer: "B"
  },
  {
    title: "How many spikes are on the Statue of Liberty's crown?",
    A: "five",
    B: "seven",
    C: "nine",
    D: "thirteen",
    answer: "B"
  },
  {
    title: "How many stars are on the American flag?",
    A: "13",
    B: "48",
    C: "50",
    D: "51",
    answer: "C"
  },
  {
    title: "How many states were in the Confederate States of America?",
    A: "11",
    B: "13",
    C: "16",
    D: "22",
    answer: "A"
  },
  {
    title:
      "How much does Peanuts character Lucy charge for her psychiatric advice?",
    A: "5 cents",
    B: "10 cents",
    C: "75 cents",
    D: "$125",
    answer: "A"
  },
  {
    title: "How long is Hanukkah?",
    A: "one day",
    B: "five days",
    C: "eight days",
    D: "two weeks",
    answer: "C"
  },
  {
    title: "Huffy, Schwinn and Raleigh are all brands of what?",
    A: "sportswear",
    B: "dishwashers",
    C: "cigarettes",
    D: "bicycles",
    answer: "D"
  },
  {
    title:
      "If a piece of music is in 'common time' how many quarter notes are there per measure?",
    A: "one",
    B: "four",
    C: "five",
    D: "ten",
    answer: "B"
  }
];

let questionTime = 20;

const title = document.querySelector("#title");
const choiceA = document.querySelector("#A");
const choiceB = document.querySelector("#B");
const choiceC = document.querySelector("#C");
const choiceD = document.querySelector("#D");
const counter = document.querySelector("#counter");
const timer = setInterval(countDown, 1000);
let questionIndex = 0;
let score = 0;

function renderQuestion(index) {
  let question = questions[index];
  title.innerHTML = "<h3>" + question.title + "</h3>";
  choiceA.innerHTML = "A. " + question["A"];
  choiceB.innerHTML = "B. " + question["B"];
  choiceC.innerHTML = "C. " + question["C"];
  choiceD.innerHTML = "D. " + question["D"];
}

function checkAnswer(answer) {
  if (answer == questions[questionIndex].answer) {
    answerIsCorrect();
    questionIndex++;
    if (questionIndex < questions.length) {
      renderQuestion(questionIndex);
    }
  } else {
    answerIsWrong();
    questionIndex++;
    if (questionIndex < questions.length) {
      renderQuestion(questionIndex);
    }
  }
}

function setTree(score) {
  let branch = document.getElementById(`${score}`);
  branch.style.backgroundColor = "yellow";
}
function unsetTree() {
  if (score > 0) {
    let branch = document.getElementById(`${score}`);
    branch.style.backgroundColor = "";
  }
}

function setBank(score) {
  let money = 0;
  switch (score) {
    case 0:
      money = 0;
      break;
    case 1:
      money = 100;
      break;
    case 2:
      money = 200;
      break;
    case 3:
      money = 300;
      break;
    case 4:
      money = 400;
  }
  let bank = document.querySelector("#money");
  bank.innerHTML = `<h1> ${money} </h1>`;
}

function countDown() {
  questionTime--;
  counter.innerHTML = questionTime;
  if (questionTime == 0) {
    clearInterval(timer);
    alert("GAME OVER!");
  }
}

function answerIsCorrect() {
  unsetTree();
  score++;
  setBank(score);
  setTree(score);
}

function answerIsWrong() {
  unsetTree();
  score = 0;
  setBank(score);
}

function playGame() {
  renderQuestion(questionIndex);
}

playGame();
