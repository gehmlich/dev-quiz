const questions = [
  {
    question:
      "Welches Tier wird oft als Metapher für agile Softwareentwicklung verwendet?",
    answers: [
      { text: "Affe 🐵", value: "a" },
      { text: "Faultier 🦥", value: "b" },
      { text: "Vogel 🐦", value: "c" },
      { text: "Pinguin 🐧", value: "d" },
    ],
    id: "q1",
    correctAnswer: "d",
  },
  {
    question:
      "Welches Schlüsselwort wird verwendet, um eine Variable in der Programmierung zu deklarieren?",
    answers: [
      { text: "int", value: "a" },
      { text: "var", value: "b" },
      { text: "double", value: "c" },
      { text: "string", value: "d" },
    ],
    id: "q1",
    correctAnswer: "b",
  },
  {
    question:
      "Welches Entwicklerwerkzeug wurde von Microsoft entwickelt und ist eine integrierte Entwicklungsumgebung für Windows?",
    answers: [
      { text: "Visual Studio", value: "a" },
      { text: "Atom", value: "b" },
      { text: "Eclipse", value: "c" },
      { text: "NetBeans", value: "d" },
    ],
    id: "q2",
    correctAnswer: "a",
  },
  {
    question:
      "Welche Art von Fehler tritt auf, wenn ein Programm auf einen unerwarteten Wert zugreift oder eine ungültige Aktion ausführt?",
    answers: [
      { text: "Syntaxfehler", value: "a" },
      { text: "Laufzeitfehler", value: "b" },
      { text: "Kompilierungsfehler", value: "c" },
      { text: "Semantischer Fehler", value: "d" },
    ],
    id: "q2",
    correctAnswer: "b",
  },
  {
    question: "Welcher Datentyp wird verwendet, um eine Ganzzahl zu speichern?",
    answers: [
      { text: "int", value: "a" },
      { text: "double", value: "b" },
      { text: "string", value: "c" },
      { text: "boolean", value: "d" },
    ],
    id: "q3",
    correctAnswer: "a",
  },
  {
    question:
      "Was ist der Wert der Variable 'x' nach Ausführung des folgenden Codes? int x = 5; x += 2;",
    answers: [
      { text: "5", value: "a" },
      { text: "2", value: "b" },
      { text: "7", value: "c" },
      { text: "3", value: "d" },
    ],
    id: "q3",
    correctAnswer: "c",
  },
  {
    question:
      "Welches Schlüsselwort wird verwendet, um eine Bedingung zu definieren?",
    answers: [
      { text: "condition", value: "a" },
      { text: "do", value: "b" },
      { text: "if", value: "c" },
      { text: "class", value: "d" },
    ],
    id: "q4",
    correctAnswer: "c",
  },
  {
    question:
      "Welches Schlüsselwort wird verwendet, um eine Bedingung zu negieren?",
    answers: [
      { text: "not", value: "a" },
      { text: "but", value: "b" },
      { text: "or", value: "c" },
      { text: "and", value: "d" },
    ],
    id: "q4",
    correctAnswer: "a",
  },
  {
    question:
      "Was ist der Wert von 'i' nach Ausführung des folgenden Codes? int i = 0; while(i < 5){ i++; };",
    answers: [
      { text: "0", value: "a" },
      { text: "1", value: "b" },
      { text: "4", value: "c" },
      { text: "5", value: "d" },
    ],
    id: "q5",
    correctAnswer: "c",
  },
  {
    question:
      "Welches der folgenden Statements wird in einer Schleife verwendet, um zur nächsten Iteration der Schleife zu springen?",
    answers: [
      { text: "return", value: "a" },
      { text: "continue", value: "b" },
      { text: "break", value: "c" },
      { text: "exit", value: "d" },
    ],
    id: "q5",
    correctAnswer: "b",
  },

  {
    question: "Wie wird das erste Element in einem Array indiziert?",
    answers: [
      { text: "0", value: "a" },
      { text: "1", value: "b" },
      { text: "-1", value: "c" },
      { text: "Es gibt kein erstes Element", value: "d" },
    ],
    id: "q6",
    correctAnswer: "a",
  },
  {
    question:
      "Wie deklariert man ein Array namens 'myArray' mit einer Länge von 5?",
    answers: [
      { text: "int myArray = [5];", value: "a" },
      { text: "int[] myArray = 5;", value: "b" },
      { text: "int[] myArray = new int[5];", value: "c" },
      { text: "myArray[] = {5};", value: "d" },
    ],
    id: "q6",
    correctAnswer: "c",
  },
  {
    question: "Was ist eine Methode in der Programmierung?",
    answers: [
      { text: "Eine Funktion, die einen Wert zurückgibt", value: "a" },
      { text: "Eine Art Schleife", value: "b" },
      { text: "Ein Variablenname", value: "c" },
      { text: "Eine Anweisung", value: "d" },
    ],
    id: "q7",
    correctAnswer: "a",
  },
  {
    question: "Was ist der Zweck von Parametern in einer Methode?",
    answers: [
      {
        text: "Um den Rückgabewert der Methode zu definieren",
        value: "a",
      },
      {
        text: "Um die Sichtbarkeit der Methode zu definieren",
        value: "b",
      },
      {
        text: " Um der Methode zusätzliche Informationen zu übergeben",
        value: "c",
      },
      {
        text: "Es gibt keinen Zweck für Parameter in einer Methode",
        value: "d",
      },
    ],
    id: "q7",
    correctAnswer: "c",
  },
  {
    question: "Was ist eine Klasse in der Programmierung?",
    answers: [
      { text: "Eine Funktion, die einen Wert zurückgibt", value: "a" },
      { text: "Eine Art Schleife", value: "b" },
      {
        text: "Eine Vorlage für die Erstellung von Objekten",
        value: "c",
      },
      { text: "Eine Anweisung", value: "d" },
    ],
    id: "q8",
    correctAnswer: "c",
  },
  {
    question: "Was ist ein Objekt in der Programmierung?",
    answers: [
      { text: "Ein Name für eine Variable", value: "a" },
      { text: "Eine Methode", value: "b" },
      { text: "Eine Instanz einer Klasse", value: "c" },
      { text: "Ein spezielles Zeichen in der Syntax", value: "d" },
    ],
    id: "q8",
    correctAnswer: "c",
  },
];

var index = 0;

questions.forEach((q) => {
  index++;
  const questionElement = document.createElement("p");
  questionElement.innerText = index + ". " + q.question;

  const answersEl = document.createElement("div");
  q.answers.forEach((a) => {
    const answerEl = document.createElement("label");
    answerEl.setAttribute("for", `${q.id}-${index}${a.value}`);
    answerEl.innerHTML = `<input type="radio" id="${q.id}-${index}${a.value}" name="${q.id}-${index}" value="${a.value}" /> ${a.text}`;
    answersEl.appendChild(answerEl);
    const br = document.createElement("br");
    answersEl.appendChild(br);
  });

  const container = document.getElementById(q.id);
  container.appendChild(questionElement);
  container.appendChild(answersEl);
});
