const fanBlades = document.querySelector(".blade");
const startBtn = document.getElementById("on");
const stopBtn = document.getElementById("off");
const slowBtn = document.getElementById("slow");
const midBtn = document.getElementById("mid");
const fastBtn = document.getElementById("fast");

function startFan() {
  fanBlades.style.animationDuration = "0.9s";
}

function stopFan() {
  fanBlades.style.animationDuration = "0s";
}
function slowFan() {
  fanBlades.style.animationDuration = "0.6s";
}

function midFan() {
  fanBlades.style.animationDuration = "0.4s";
}

function fastFan() {
  fanBlades.style.animationDuration = "0.2s";
}
startBtn.addEventListener("click", startFan);
stopBtn.addEventListener("click", stopFan);
slowBtn.addEventListener("click", slowFan);
midBtn.addEventListener("click", midFan);
fastBtn.addEventListener("click", fastFan);
