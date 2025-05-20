// Tarefas
function addTask() {
  const taskInput = document.getElementById("new-task");
  const taskList = document.getElementById("task-list");

  if (taskInput.value.trim() === "") return;

  const li = document.createElement("li");
  li.textContent = taskInput.value;
  li.onclick = () => li.classList.toggle("done");
  taskList.appendChild(li);

  taskInput.value = "";
}

// Pomodoro
let timer;
let timeLeft = 25 * 60;

function startTimer() {
  if (timer) return;

  timer = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(timer);
      timer = null;
      alert("Tempo finalizado! Faça uma pausa.");
      return;
    }

    timeLeft--;
    updateTimerDisplay();
  }, 1000);
}

function resetTimer() {
  clearInterval(timer);
  timer = null;
  timeLeft = 25 * 60;
  updateTimerDisplay();
}

function updateTimerDisplay() {
  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");
  document.getElementById("timer").textContent = `${minutes}:${seconds}`;
}

updateTimerDisplay();
