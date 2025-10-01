document.addEventListener("DOMContentLoaded", function () {
  const sidebarToggle = document.getElementById("sidebarToggle");
  const closeToggle = document.getElementById("closeToggle");
  const overlay = document.getElementById("overlay");
  const body = document.body;

  // Open sidebar
  sidebarToggle.addEventListener("click", function (e) {
    e.preventDefault();
    body.classList.add("sidebar-open");
    sidebarToggle.style.display = "none";
    closeToggle.style.display = "block";
  });

  // Close sidebar
  closeToggle.addEventListener("click", function (e) {
    e.preventDefault();
    body.classList.remove("sidebar-open");
    sidebarToggle.style.display = "flex";
    closeToggle.style.display = "none";
  });

  // Close sidebar by clicking on overlay
  overlay.addEventListener("click", function () {
    body.classList.remove("sidebar-open");
    sidebarToggle.style.display = "flex";
    closeToggle.style.display = "none";
  });
});

//active nav link styling
const links = document.querySelectorAll(".page-links a");
const current = window.location.pathname.split("/").pop();

links.forEach(link => {
  if (link.getAttribute("href") === current) {
    link.classList.add("active");
  }
});

document.getElementById("year").textContent = new Date().getFullYear();

// Counter Animation for stats section
const counters = document.querySelectorAll('.number');

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const increment = Math.ceil(target / 100000); // speed

    if (count < target) {
      counter.innerText = count + increment;
      setTimeout(updateCount, 25);
    } else {
      counter.innerText = target + "+";
    }
  };

  updateCount();
});

document.getElementById("main-footer-year").textContent = new Date().getFullYear();