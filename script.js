// script.js

// Rola suavemente para a seção ao clicar no link do menu
const menuLinks = document.querySelectorAll(".menu-link");

menuLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
});

// Botão de voltar ao topo
const topBtn = document.getElementById("topBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

topBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Toggle Flash Cards
const toggleButtons = document.querySelectorAll(".toggle-card");

toggleButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    const content = this.nextElementSibling;
    content.classList.toggle("d-none");
  });
});
// Alterna a rotação do flip card ao clicar
const flipCards = document.querySelectorAll('.flip-card-inner');

flipCards.forEach((card) => {
  card.addEventListener('click', () => {
    card.classList.toggle('rotated');
  });
});
