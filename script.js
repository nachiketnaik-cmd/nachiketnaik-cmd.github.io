// Mobile menu
const toggle = document.querySelector(".menu-toggle");
const nav = document.getElementById("nav");

function closeMenu() {
  nav.classList.remove("open");
  toggle.setAttribute("aria-expanded", "false");
}

toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});

nav.addEventListener("click", (e) => {
  if (e.target.tagName === "A") closeMenu();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu();
});

// Timeline line fills in as you scroll past it
const timeline = document.querySelector(".timeline");
const steps = timeline ? timeline.querySelectorAll("li") : [];

function updateTimeline() {
  const mark = window.innerHeight * 0.6;
  const rect = timeline.getBoundingClientRect();
  const progress = Math.min(Math.max((mark - rect.top) / rect.height, 0), 1);
  timeline.style.setProperty("--progress", progress);
  steps.forEach((li) => {
    li.classList.toggle("passed", li.getBoundingClientRect().top + 28 < mark);
  });
}

if (timeline) {
  window.addEventListener("scroll", updateTimeline, { passive: true });
  window.addEventListener("resize", updateTimeline);
  updateTimeline();
}

// Fade sections in as they scroll into view
const items = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach((el) => observer.observe(el));
} else {
  items.forEach((el) => el.classList.add("in"));
}
