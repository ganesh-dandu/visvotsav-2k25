const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".nav-links");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

(function(){
  const deadline = new Date("2025-09-11T23:59:59");

  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minsEl = document.getElementById("minutes");
  const secsEl = document.getElementById("seconds");

  function updateCountdown(){
    const now = new Date();
    let diff = Math.max(0, deadline - now);

    const d = Math.floor(diff / (1000*60*60*24));
    diff -= d * 86400000;
    const h = Math.floor(diff / (1000*60*60));
    diff -= h * 3600000;
    const m = Math.floor(diff / (1000*60));
    diff -= m * 60000;
    const s = Math.floor(diff / 1000);

    daysEl.textContent = String(d).padStart(2,'0');
    hoursEl.textContent = String(h).padStart(2,'0');
    minsEl.textContent = String(m).padStart(2,'0');
    secsEl.textContent = String(s).padStart(2,'0');
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
})();
