let display = document.getElementById("display");
let calculationCount = 0;
let maxBeforeQuiz = Math.floor(Math.random() * 5) + 1;
let quizAnswer = 0;

function press(val) {
  display.value += val;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  if (display.value === "") return;
  try {
    display.value = eval(display.value);
    calculationCount++;
    if (calculationCount >= maxBeforeQuiz) {
      showQuiz();
      calculationCount = 0;
      maxBeforeQuiz = Math.floor(Math.random() * 5) + 1;
    }
  } catch {
    display.value = "Error";
  }
}

function showQuiz() {
  const a = Math.floor(Math.random() * 10);
  const b = Math.floor(Math.random() * 10);
  quizAnswer = a + b;
  document.getElementById("quizQuestion").textContent = `What is ${a} + ${b}?`;
  document.getElementById("quizAnswer").value = "";
  document.getElementById("quizModal").style.display = "flex";
}

function submitAnswer() {
  const userAnswer = parseInt(document.getElementById("quizAnswer").value);
  if (userAnswer === quizAnswer) {
    alert("✅ Correct! Continue calculating.");
    document.getElementById("quizModal").style.display = "none";
  } else {
    alert("❌ Wrong! Try again.");
  }
}