const ingredientsBtn = document.getElementById("toggle-ingredients");
const stepsBtn = document.getElementById("toggle-steps");
const ingredientsList = document.getElementById("ingredients");
const stepsList = document.getElementById("steps");

ingredientsBtn.addEventListener("click", () => {
  ingredientsList.classList.toggle("hidden");
  ingredientsBtn.textContent = ingredientsList.classList.contains("hidden") ? "Show Ingredients" : "Hide Ingredients";
});

stepsBtn.addEventListener("click", () => {
  stepsList.classList.toggle("hidden");
  stepsBtn.textContent = stepsList.classList.contains("hidden") ? "Show Steps" : "Hide Steps";
});

const startBtn = document.getElementById("start-cooking");
const nextBtn = document.getElementById("next-step");
const steps = document.querySelectorAll("#steps li");
const progressBar = document.getElementById("progress-bar");

let currentStep = -1;

startBtn.addEventListener("click", () => {
  currentStep = 0;
  highlightStep(currentStep);
  nextBtn.classList.remove("hidden");
  startBtn.disabled = true;
  updateProgress();
});

nextBtn.addEventListener("click", () => {
  if (currentStep < steps.length - 1) {
    currentStep++;
    highlightStep(currentStep);
    updateProgress();
  } else {
    alert("You're done! Enjoy your cake 🎂");
    nextBtn.disabled = true;
  }
});

function highlightStep(index) {
  steps.forEach((step, i) => {
    step.style.backgroundColor = i === index ? "#fff3e0" : "transparent";
    step.style.fontWeight = i === index ? "bold" : "normal";
  });
}

function updateProgress() {
  const percent = ((currentStep + 1) / steps.length) * 100;
  progressBar.style.width = percent + "%";
}
