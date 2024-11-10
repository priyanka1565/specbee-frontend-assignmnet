const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.previous-btn');
const carousel = document.querySelector('.carousel');
const speakerDetail = document.querySelector('.speaker-detail');
const closeBtn = document.querySelector('.btn-close');
const cards = document.querySelectorAll('.card');

// Elements inside the detailed view
const speakerImage = document.getElementById('speaker-image');
const speakerName = document.getElementById('speaker-name');
const speakerRole = document.getElementById('speaker-role');
const speakerCompany = document.getElementById('speaker-company');

// Function to rotate cards
function rotateNext() {
  const firstCard = carousel.firstElementChild;
  carousel.appendChild(firstCard);
}

function rotatePrev() {
  const lastCard = carousel.lastElementChild;
  carousel.insertBefore(lastCard, carousel.firstElementChild);
}

// Show the detailed view with selected card data
function showSpeakerDetail(card) {
  speakerImage.src = card.dataset.img;
  speakerName.textContent = card.dataset.name;
  speakerRole.textContent = card.dataset.role;
  speakerCompany.textContent = card.dataset.company;

  speakerDetail.classList.add('visible');
}

// Close the detailed view
function closeSpeakerDetail() {
  speakerDetail.classList.remove('visible');
}

// Add event listeners to cards
cards.forEach(card => {
  card.addEventListener('click', () => showSpeakerDetail(card));
});

closeBtn.addEventListener('click', closeSpeakerDetail);
nextBtn.addEventListener('click', rotateNext);
prevBtn.addEventListener('click', rotatePrev);
