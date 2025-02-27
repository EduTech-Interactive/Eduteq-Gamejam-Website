document.addEventListener("DOMContentLoaded", function () {
  var navToggle = document.getElementById("nav-toggle");
  var navContent = document.getElementById("nav-content");

  navToggle.addEventListener("click", function () {
    if (
      navContent.style.display === "none" ||
      navContent.style.display === ""
    ) {
      navContent.style.display = "block";
    } else {
      navContent.style.display = "none";
    }
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth < 1024) {
      navContent.style.display = "none";
    } else {
      navContent.style.display = "block";
    }
  });

  document.querySelectorAll(".menu-item").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});

AOS.init();

function calculateTimeDifference(targetDate) {
  const currentDate = new Date();
  const targetDateTime = new Date(targetDate);
  const difference = targetDateTime - currentDate;

  const weeks = Math.floor(difference / (1000 * 60 * 60 * 24 * 7));
  const days = Math.floor(
    (difference % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24)
  );
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

  document.getElementById("weeks").textContent = `${weeks}`;
  document.getElementById("days").textContent = `${days}`;
  document.getElementById("hours").textContent = `${hours}`;
  document.getElementById("minutes").textContent = `${minutes}`;
}

// Set your target date in ISO format (YYYY-MM-DDTHH:mm:ss.sssZ)
const targetDate = "2025-05-03T18:00:00.000Z";

// Update the countdown every second
setInterval(() => {
  calculateTimeDifference(targetDate);
}, 1000);
