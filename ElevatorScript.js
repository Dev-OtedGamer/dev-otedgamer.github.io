// ================================
// Setup & Global Variables
// ================================
const floors = [3, 2, 1];
const leftWall = document.querySelector('.left-wall');
const rightWall = document.querySelector('.right-wall');
const leftButtons = document.querySelector('.left-buttons');
const rightButtons = document.querySelector('.right-buttons');
const leftDoor = document.querySelector('.left-door');
const rightDoor = document.querySelector('.right-door');
const elevator = document.querySelector('.elevator');
const contents = document.querySelectorAll('.floor-content');
const leftQuotes = [
  " Thinking outside the box and finding ways to open my own doors into the Tech Industry",
  "When one door closes, it is only a matter of time before another one opens",
  "Continually elevating my learning and knowledge"
];

// ================================
// DOM Content Loaded Event
// ================================
window.addEventListener('DOMContentLoaded', () => {
  resetPosters();
  setupElevatorControls();
});

const gun = document.getElementById('gunAimer');

window.addEventListener('mousemove', (e) => {
  const winWidth = window.innerWidth;
  const percent = (e.clientX / winWidth - 0.5) * 2; // -1 to 1
  const maxTilt = 15; // degrees
  const rotate = maxTilt * percent;

  if (gun && document.getElementById('floor-2').style.display === 'block') {
    gun.style.transform = `translateX(-50%) rotate(${rotate}deg)`;
  }
});

// ================================
// Card & Modal Management
// ================================

const projectData = {
  project1: {
    title: "Project Title 1",
    description: "This project was built with HTML, CSS, and JavaScript.",
    image: "image/DigDugStartAnimation.gif"
  },
  project2: {
    title: "Project Title 2",
    description: "Unity 2D coin collector game with jump animation and score tracking.",
    image: "image/DigDugGameOver.gif"
  },
  project3: {
    title: "Project Title 3",
    description: "Blueprint setup for cone character in Unreal Engine.",
    image: "image/ConePlayerBP.PNG"
  },
  project4: {
    title: "Project Title 4",
    description: "Main screen layout for Unreal cone game.",
    image: "image/ConeStart.PNG"
  }
};

const cards = document.querySelectorAll('.project-card');
const modal = document.getElementById('projectModal');
const modalTitle = document.getElementById('modalTitle');
const modalImage = document.getElementById('modalImage');
const modalDesc = document.getElementById('modalDescription');
const closeBtn = document.querySelector('.close-button');

cards.forEach(card => {
  card.addEventListener('click', () => {
    const projectKey = `project${card.dataset.project}`;
    const data = projectData[projectKey];

    if (data) {
      modalTitle.textContent = data.title;
      modalImage.src = data.image;
      modalDesc.textContent = data.description;
      modal.classList.remove('hidden');
    }
  });
});

closeBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
});

// ================================
// Poster & Wall Management
// ================================
function hideElevatorInterior() {
  leftWall.classList.add('hidden');
  rightWall.classList.add('hidden');
  leftDoor.classList.add('hidden');
  rightDoor.classList.add('hidden');

  const leftPoster = document.getElementById('leftPoster');
  const rightPoster = document.getElementById('rightPoster');

  if (leftPoster) leftPoster.classList.add('hidden');
  if (rightPoster) rightPoster.classList.add('hidden');
}

function resetPosters() {
  const poster = document.getElementById('leftPoster');
  const randomIndex = Math.floor(Math.random() * leftQuotes.length);
  if (poster) {
    poster.textContent = leftQuotes[randomIndex];
    poster.classList.remove('hidden'); // Unhides the poster
  }
}

// ================================
// Elevator Button Controls
// ================================
function setupElevatorControls() {
  // Clear existing buttons
  leftButtons.innerHTML = '';
  rightButtons.innerHTML = '';

  // Randomly decide which wall to show buttons on
  const buttonWall = Math.random() < 0.5 ? 'left' : 'right';
  const container = buttonWall === 'left' ? leftButtons : rightButtons;

  // Create floor buttons
  floors.forEach(floor => {
    const btn = document.createElement('button');
    btn.textContent = floor;
    btn.setAttribute('data-floor', floor);
    container.appendChild(btn);
  });

  // Event Listener for Floor Buttons
  container.addEventListener('click', e => {
    if (e.target.tagName !== 'BUTTON') return;
    const floor = e.target.getAttribute('data-floor');
    triggerElevatorSequence(floor);
  });
}

// ================================
// Elevator Sequence (Shake + Doors)
// ================================
function triggerElevatorSequence(floor) {
  // Reset shake class if already applied
  elevator.classList.remove('shake');
  void elevator.offsetWidth; // Force reflow for animation restart
  elevator.classList.add('shake');

  // After 0.5s shake, pause then open doors
  setTimeout(() => {
    elevator.classList.remove('shake');

    setTimeout(() => {
      openDoors();

      // After 1s door animation, hide interior and show floor content
      setTimeout(() => {
        hideElevatorInterior();
        showContent(floor);
      }, 1000);

    }, 500);

  }, 500); // Shake duration
}

function openDoors() {
  leftDoor.classList.add('open-left');
  rightDoor.classList.add('open-right');
}

function closeDoors() {
  leftDoor.classList.remove('open-left');
  rightDoor.classList.remove('open-right');
  
  // Make sure doors are visible again
  leftDoor.classList.remove('hidden');
  rightDoor.classList.remove('hidden');
}

// ================================
// Floor Content Display
// ================================
function showContent(floorNumber) {
  // Hide all floor content
  contents.forEach(content => content.style.display = "none");

  // Show selected floor content
  const selectedContent = document.getElementById(`floor-${floorNumber}`);
  if (selectedContent) {
    selectedContent.style.display = "block";

    // Crosshair only for Floor 2
    if (floorNumber == 2) {
      document.body.classList.add('crosshair-active');
      gun.style.display = "block";
    } else {
      document.body.classList.remove('crosshair-active');
      gun.style.display = "none";
    }
  }
}

// ================================
// Back Button - Return to Elevator
// ================================
document.querySelectorAll('.back-button').forEach(button => {
  button.addEventListener('click', () => {
    closeDoors();
    gun.style.display = 'none';
    document.body.classList.remove('crosshair-active');

    // Hide floor content
    contents.forEach(content => content.style.display = 'none');

    // Show elevator walls
    leftWall.classList.remove('hidden');
    rightWall.classList.remove('hidden');
    leftWall.style.display = 'block';
    rightWall.style.display = 'block';

    // Reset UI
    setupElevatorControls();  // new buttons
    resetPosters();           // new quote
  });
});