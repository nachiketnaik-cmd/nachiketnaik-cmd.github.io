// Open and close the ☰ menu
const toggle = document.querySelector(".menu-toggle");
const links = document.querySelector(".menu-links");

function setOpen(open) {
  links.classList.toggle("open", open);
  toggle.setAttribute("aria-expanded", open);
}

toggle.addEventListener("click", (event) => {
  event.stopPropagation();
  setOpen(!links.classList.contains("open"));
});

// Close when clicking anywhere else, choosing a link, or pressing Escape
document.addEventListener("click", (event) => {
  if (!links.contains(event.target)) setOpen(false);
});
links.addEventListener("click", (event) => {
  if (event.target.tagName === "A") setOpen(false);
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setOpen(false);
});
