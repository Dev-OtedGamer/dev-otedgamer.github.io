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
const gun = document.getElementById('gunWrapper');


const leftQuotes = [
  " Thinking outside the box and finding ways to open my own doors into the Tech Industry",
  "When one door closes, it is only a matter of time before another one opens",
  "Continually elevating my learning and knowledge"
];


// ================================
// Project card setup
// ================================
function setupProjectCards() {
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
    // Trigger spin animation
    card.classList.remove('card-spin');
    void card.offsetWidth; // Force reflow
    card.classList.add('card-spin');

    // Delay modal until spin completes
    setTimeout(() => {
      modalTitle.textContent = data.title;
      modalImage.src = data.image;
      modalDesc.textContent = data.description;
      modal.classList.remove('hidden');
    }, 600); // Match spin duration (0.6s)
  }
});


  });

  closeBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
  });
}


// ================================
// DOM Content Loaded Event
// ================================
window.addEventListener('DOMContentLoaded', () => {
  resetPosters();
  setupElevatorControls();
  setupProjectCards();

});



// ================================
// Card & Modal Management
// ================================

const projectData = {
  project1: {
    title: "Project Title 1",
    description: "This project was built with HTML, CSS, and JavaScript.",
    image: "Image/DigDugStartAnimation.gif"
  },
  project2: {
    title: "Project Title 2",
    description: "Unity 2D coin collector game with jump animation and score tracking.",
    image: "Image/DigDugGameOver.gif"
  },
  project3: {
    title: "Project Title 3",
    description: "Blueprint setup for cone character in Unreal Engine.",
    image: "Image/ConePlayerBP.PNG"
  },
  project4: {
    title: "Project Title 4",
    description: "Main screen layout for Unreal cone game.",
    image: "Image/ConeStart.PNG"
  },
  project5: {
    title: "Project Title 5",
    description: "Main screen layout for Unreal cone game.",
    image: "Image/ConeStart.PNG"
  },
  project6: {
    title: "Project Title 6",
    description: "Main screen layout for Unreal cone game.",
    image: "Image/ConeStart.PNG"
  },
  project7: {
    title: "Project Title 7",
    description: "Main screen layout for Unreal cone game.",
    image: "Image/ConeStart.PNG"
  }
};


// ================================
// Shooting Gallery Logic - Clean
// ================================
const gunWrapper = document.getElementById('gunWrapper');
const gunArm = document.getElementById('gunArm');
const floor2 = document.getElementById('floor-2');

let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function updateGunPosition() {
  const isVisible = !floor2.classList.contains('hidden');

  if (isVisible) {
    gunWrapper.style.display = 'block';

    const centerX = window.innerWidth / 2;
    const offsetX = mouseX - centerX;

    // Clamp horizontal movement
    const maxOffsetX = window.innerWidth * 0.25; // 25% of viewport width
    const clampedOffsetX = Math.max(-maxOffsetX, Math.min(offsetX, maxOffsetX));

    const translateX = clampedOffsetX * 0.02; // Sway
    const rotateZ = clampedOffsetX * 0.03;    // Tilt

    gunArm.style.transform = `translateX(${translateX}px) rotate(${rotateZ}deg)`;
  } else {
    gunWrapper.style.display = 'none';
  }

  requestAnimationFrame(updateGunPosition);
}



requestAnimationFrame(updateGunPosition);

// ================================
// GUN PROJECTILE
// ================================
  function fireProjectile(x, y) {
  const projectile = document.createElement('div');
  projectile.classList.add('projectile');

  const gunRect = gunArm.getBoundingClientRect();
  const startX = gunRect.left + gunRect.width / 2;
  const startY = gunRect.top;

  projectile.style.left = `${startX}px`;
  projectile.style.top = `${startY}px`;

  document.body.appendChild(projectile);

  const deltaX = x - startX;
  const deltaY = y - startY;
  const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

  const angle = Math.atan2(deltaY, deltaX);
  const moveX = Math.cos(angle) * distance;
  const moveY = Math.sin(angle) * distance;

  requestAnimationFrame(() => {
    projectile.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });

  // Detect hit after animation
  setTimeout(() => {
    const hitElement = document.elementFromPoint(x, y);
    if (hitElement?.classList.contains('project-card')) {
      hitElement.classList.remove('card-spin');
      void hitElement.offsetWidth; // Force reflow
      hitElement.classList.add('card-spin');
    }
    projectile.remove();
  }, 400);
}



// ================================
// GUN EVENT LISTENER
// ================================
  document.addEventListener('click', (e) => {
  const isFloor2Active = !floor2.classList.contains('hidden');
  if (!isFloor2Active) return; //  Only fires on Floor 2

  gunArm.classList.remove('recoil');
  void gunArm.offsetWidth;
  gunArm.classList.add('recoil');

  fireProjectile(e.clientX, e.clientY);
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
  contents.forEach(content => content.classList.add('hidden')); // Hide all
  const selectedContent = document.getElementById(`floor-${floorNumber}`);
  console.log('selectedContent:', selectedContent); // Add this line
  console.log('Trying to unhide:', selectedContent);
  console.log('Floor to show:', floorNumber);



  if (selectedContent) {
    selectedContent.classList.remove('hidden'); // Show selected
    const isFloor2Active = (floorNumber == 2);
    gunWrapper.style.display = isFloor2Active ? 'block' : 'none';

    if (isFloor2Active) {
      document.body.classList.add('crosshair-active');
    } else {
      document.body.classList.remove('crosshair-active');
    }
  }
}


// ================================
// Back Button - Return to Elevator
// ================================
document.querySelectorAll('.back-button').forEach(button => {
  button.addEventListener('click', () => {
    closeDoors();
    gunWrapper.style.display = 'none';
    document.body.classList.remove('crosshair-active');

    // Hide floor content
    contents.forEach(content => content.classList.add('hidden'));


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