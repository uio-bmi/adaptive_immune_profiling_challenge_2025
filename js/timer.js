document.addEventListener("DOMContentLoaded", function () {
  const timerEl = document.getElementById("timer");
  if (!timerEl) return;

  const targetDate = new Date("2025-11-05T00:00:00Z").getTime();

  function updateTimer() {
    const now = new Date().getTime();
    const diff = targetDate - now;

    if (diff <= 0) {
      timerEl.innerHTML = `<span class="expired">🚀 Challenge Launched!</span>`;
      timerEl.classList.remove("pulse");
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    timerEl.innerHTML = `
      <div class="time-box"><span>${days}</span><label>d</label></div>
      <div class="time-box"><span>${hours}</span><label>h</label></div>
      <div class="time-box"><span>${minutes}</span><label>m</label></div>
      <div class="time-box"><span>${seconds}</span><label>s</label></div>
    `;

    if (diff < 24 * 60 * 60 * 1000) timerEl.classList.add("pulse");
    else timerEl.classList.remove("pulse");
  }

  updateTimer();
  setInterval(updateTimer, 1000);
});
