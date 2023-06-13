window.addEventListener("load", sidenVises);
function sidenVises() {
  console.log(sidenVises);
  btn.addEventListener("click", toggleMenu);
}

const sections = document.querySelectorAll(".appear");

const cb = function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("inview");
      observer.unobserve(entry.target); // stop med at observere efter animation
    }
  });
};

const io = new IntersectionObserver(cb);

sections.forEach((section) => {
  io.observe(section);
});

const btn = document.querySelector(".toggle-btn");
const menu = document.querySelector(".main-menu");

function toggleMenu() {
  menu.classList.toggle("shown");

  const menuShown = menu.classList.contains("shown");
  if (menuShown) {
    console.log(menuShown);

    btn.textContent = "Luk";
  } else {
    console.log(menuShown);
    btn.textContent = "Menu";
  }
}
