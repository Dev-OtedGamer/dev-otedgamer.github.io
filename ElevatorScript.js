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
// const projectData = {
//   project1: {
//     title: "Project Title 1",
//     description: "This project was built with HTML, CSS, and JavaScript.",
//     image: "Images/Aprt_Blend_Topview_Angle.JPG"
//   },
//   project2: {
//     title: "Project Title 2",
//     description: "Unity 2D coin collector game with jump animation and score tracking.",
//     image: "Images/Doors_Blender_ThumbHandleLrgWindowDoor.JPG"
//   },
//   project3: {
//     title: "Project Title 3",
//     description: "Blueprint setup for cone character in Unreal Engine.",
//     image: "Images/Apartment_Layout.PNG"
//   },
//   project4: {
//     title: "Project Title 4",
//     description: "Main screen layout for Unreal cone game.",
//     image: "Image/SurvivalTreeChopped.png"
//   },
//   project5: {
//     title: "Project Title 5",
//     description: "Main screen layout for Unreal cone game.",
//     image: "Image/2DheroesStart.png"
//   },
//   project6: {
//     title: "Project Title 6",
//     description: "Main screen layout for Unreal cone game.",
//     image: "Image/Flower_Happy1.png"
//   },
//   project7: {
//     title: "Project Title 7",
//     description: "Main screen layout for Unreal cone game.",
//     image: "Image/CoinsGoneWildGamePlay.png.gif"
//   },
//   project8: {
//     title: "Project Title 8",
//     description: "Main screen layout for Unreal cone game.",
//     image: "Image/DigDugStartAnimation.gif"
//   },
//   project9: {
//     title: "Project Title 9",
//     description: "Main screen layout for Unreal cone game.",
//     image: "Image/ConeStart.PNG"
//   }
// };

// function setupProjectCards() {
//   const cards = document.querySelectorAll('.project-card');
//   const modal = document.getElementById('projectModal');
//   const modalTitle = document.getElementById('modalTitle');
//   const modalImage = document.getElementById('modalImage');
//   const modalDesc = document.getElementById('modalDescription');
//   const closeBtn = document.querySelector('.close-button');

//   cards.forEach(card => {
//     card.addEventListener('click', () => {
//   console.log('Adding spin class to card:', card);
//   console.log('Card clicked:', card.dataset.project);
//   const projectKey = `project${card.dataset.project}`;
//   const data = projectData[projectKey];

//   if (data) {
//     // Trigger spin animation
//     card.classList.remove('card-spin');
//     void card.offsetWidth; // Force reflow
//     card.classList.add('card-spin');

//     // Delay modal until spin completes
//     setTimeout(() => {
//       modalTitle.textContent = data.title;
//       modalImage.src = data.image;
//       modalDesc.textContent = data.description;
//       modal.classList.remove('hidden');
//     }, 600); // Match spin duration (0.6s)
//   }
// });


//   });

//   closeBtn.addEventListener('click', () => {
//     modal.classList.add('hidden');
//   });
// }


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


const modal = document.getElementById('projectModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalLink = document.getElementById('modalLink');
const closeButton = document.querySelector('.close-button');

const slideshows = [
  [
    {
      image: 'Images/Aprt_Blend_Topview_Angle.JPG',
      title: '3D Apartment Model – Top View',
      description: 'This top-down render showcases the full layout of a 3D apartment model I created. It played a key role in securing a major project at work by demonstrating spatial planning and design clarity.',
      link: 'https://dev-otedgamer.github.io/BlenderApartmentIndex.html'
    },
    {
      image: 'Images/Aprt_Blend_Bathroom_Open_Cabinet.JPG',
      title: 'Interactive Bathroom Cabinet Detail',
      description: 'This image highlights the interactive elements of the model, such as functional cabinet doors. It demonstrates how Blender can be used to simulate real-world usability in architectural visualization.',
      link: 'https://dev-otedgamer.github.io/BlenderApartmentIndex.html'
    },
    {
      image: 'Images/Aprt_Blend_Livingroom.JPG',
      title: 'Living Room Window – Detail View',
      description: 'This detailed render of the living room window emphasizes the level of realism and precision achievable in Blender. It complements the bathroom view to showcase the model’s overall fidelity.',
      link: 'https://dev-otedgamer.github.io/BlenderApartmentIndex.html'
    },
    {
      image: 'Images/Aprt_Blend_TopAngleDoor.JPG',
      title: 'Entryway – Angled Top View',
      description: 'An angled top-down perspective of the apartment’s entryway, offering a more dynamic view of the layout and architectural flow.',
      link: 'https://dev-otedgamer.github.io/BlenderApartmentIndex.html'
    }
  ],
  [
    {
      image: 'Images/Doors_Blender_ThumbHandleWindowDetailDoor.JPG',
      title: 'Thumb Handle Door – Detail View',
      description: 'This personal project was inspired by a 3D map I was developing at work. It showcases a detailed thumb handle door, modeled to demonstrate precision and realism in Blender.',
      link: 'https://dev-otedgamer.github.io/DoorsBlenderIndex.html'
    },
    {
      image: 'Images/Doors_Blender_PushPullDoor.JPG',
      title: 'Push/Pull Door Configuration',
      description: 'One of several modular door types that can be constructed using my custom Blender Door Package. This setup highlights functional design and adaptability.',
      link: 'https://dev-otedgamer.github.io/DoorsBlenderIndex.html'
    },
    {
      image: 'Images/Doors_Blender_CrashbarWindowDoor.JPG',
      title: 'Crash Bar Door with Window',
      description: 'Built using a combination of Geometry Nodes and traditional 3D modeling, this door demonstrates the flexibility of the Door Package to generate countless variations.',
      link: 'https://dev-otedgamer.github.io/DoorsBlenderIndex.html'
    },
    {
      image: 'Images/Doors_Blender_PushBarDoor.JPG',
      title: 'Push Bar Door – Modular Components',
      description: 'By connecting or disconnecting node groups, users can dynamically swap out components like handles, windows, kick plates, and more—enabling rapid prototyping of door styles.',
      link: 'https://dev-otedgamer.github.io/DoorsBlenderIndex.html'
    }
  ],
  [
    {
      image: 'Images/ApartmentTour.PNG',
      title: 'Interactive Apartment Tour – Overview',
      description: 'This concept was developed as a real-world project using HTML, CSS, and JavaScript. It served as an interactive map prototype and directly contributed to securing another professional opportunity.',
      link: 'https://dev-otedgamer.github.io/Apartment_Test_Main.html'
    },
    {
      image: 'Images/BathroomTour.jpg',
      title: 'Bathroom Access Simulation',
      description: 'This module was designed as part of a visual training tool for access control, simulating restricted entry points within a residential layout.',
      link: 'https://dev-otedgamer.github.io/Apartment_Test_Main.html'
    },
    {
      image: 'Images/FobReaderTour.jpg',
      title: 'Key Fobs and Card Readers',
      description: 'This section highlights access control mechanisms, including fob readers and card scanners, to demonstrate secure entry systems within the interactive environment.',
      link: 'https://dev-otedgamer.github.io/Apartment_Test_Main.html'
    },
    {
      image: 'Images/KitchenTour.JPG',
      title: 'Kitchen and Common Areas',
      description: 'Designed to showcase additional relevant spaces, this portion of the tour rounds out the full apartment walkthrough with a focus on layout and accessibility.',
      link: 'https://dev-otedgamer.github.io/Apartment_Test_Main.html'
    }
  ],
  [
    {
      image: 'Image/SurvivalFreshTree.png',
      title: 'Survival Test Game – Forest Environment',
      description: 'This Unity project was my deep dive into crafting-style survival mechanics. Inspired by my favorite genre, I set out to build a playable prototype from scratch using C# and free-to-use assets.',
      link: 'https://dev-otedgamer.github.io/SurvivalTestIndex.html',
      playLink: 'https://dev-otedgamer.github.io/WebGLBuildSurvivalTest/index.html',
      controls: 'WASD/Arrow keys to move, Mouse to look, Left Click to chop, Space to jump, G to drop logs, 1–6 to switch tools, Esc to release cursor.'
    },
    {
      image: 'Image/SurvivalLogTransport.png',
      title: 'Log Harvesting and Transport',
      description: 'Players can equip an axe, chop down trees, and collect logs. This mechanic demonstrates interactive resource gathering and inventory logic within a 3D environment.',
      link: 'https://dev-otedgamer.github.io/SurvivalTestIndex.html',
      playLink: 'https://dev-otedgamer.github.io/WebGLBuildSurvivalTest/index.html',
      controls: 'WASD/Arrow keys to move, Mouse to look, Left Click to chop, Space to jump, G to drop logs, 1–6 to switch tools, Esc to release cursor.'
    },
    {
      image: 'Image/SurvivalDroppingLogs.png',
      title: 'Inventory and Object Interaction',
      description: 'This scene showcases the player’s ability to pick up and transport logs. I implemented a first-person camera system and interaction logic to simulate realistic object handling.',
      link: 'https://dev-otedgamer.github.io/SurvivalTestIndex.html',
      playLink: 'https://dev-otedgamer.github.io/WebGLBuildSurvivalTest/index.html',
      controls: 'WASD/Arrow keys to move, Mouse to look, Left Click to chop, Space to jump, G to drop logs, 1–6 to switch tools, Esc to release cursor.'
    },
    {
      image: 'Image/SurvivalChopLog.png',
      title: 'Log Processing – Plank Cutting',
      description: 'In addition to harvesting, players can process logs into planks. This mechanic adds depth to the crafting system and demonstrates modular gameplay progression.',
      link: 'https://dev-otedgamer.github.io/SurvivalTestIndex.html',
      playLink: 'https://dev-otedgamer.github.io/WebGLBuildSurvivalTest/index.html',
      controls: 'WASD/Arrow keys to move, Mouse to look, Left Click to chop, Space to jump, G to drop logs, 1–6 to switch tools, Esc to release cursor.'
    }
  ],
  [
    {
      image: 'Image/2DHeroesLvl1.png',
      title: '2D Heroes – Level 1',
      description: 'This 2D platformer was developed while following a tutorial, serving as a foundation for learning Unity’s 2D systems. It features classic movement, combat, and level design mechanics.',
      link: 'https://dev-otedgamer.github.io/2DHeroesIndex.html',
      playLink: 'https://dev-otedgamer.github.io/WebGLBuild2DHeros/index.html',
      controls: 'WASD/Arrow keys to move and climb, Left Click or Left Ctrl to attack, Space or Right Click to jump.'
    },
    {
      image: 'Image/2DHeroesLvl2.png',
      title: '2D Heroes – Custom Tile Set',
      description: 'To personalize the project, I used a different tile set than the one provided in the tutorial. This allowed me to explore visual customization and level theming.',
      link: 'https://dev-otedgamer.github.io/2DHeroesIndex.html',
      playLink: 'https://dev-otedgamer.github.io/WebGLBuild2DHeros/index.html',
      controls: 'WASD/Arrow keys to move and climb, Left Click or Left Ctrl to attack, Space or Right Click to jump.'
    },
    {
      image: 'Image/2DHeroesFalsePlatforms.png',
      title: '2D Heroes – Visual Trickery',
      description: 'I used environmental design and perspective to create false platforms, adding a layer of challenge and encouraging players to think critically about their path forward.',
      link: 'https://dev-otedgamer.github.io/2DHeroesIndex.html',
      playLink: 'https://dev-otedgamer.github.io/WebGLBuild2DHeros/index.html',
      controls: 'WASD/Arrow keys to move and climb, Left Click or Left Ctrl to attack, Space or Right Click to jump.'
    },
    {
      image: 'Image/2DHeroesDropDown.png',
      title: '2D Heroes – Gameplay Features',
      description: 'The game includes enemies, bomb hazards, collectible diamonds, and heart pickups to restore lives—demonstrating a full gameplay loop with risk, reward, and progression.',
      link: 'https://dev-otedgamer.github.io/2DHeroesIndex.html',
      playLink: 'https://dev-otedgamer.github.io/WebGLBuild2DHeros/index.html',
      controls: 'WASD/Arrow keys to move and climb, Left Click or Left Ctrl to attack, Space or Right Click to jump.'
    }
  ],
  [
     {
      image: 'Image/FlowerThrive.png',
      title: 'LifeWorks Happy Flower Project – Unity Animation',
      description: 'This project was created using Unity’s animation system for a LifeWorks NW corporate staffing event for employee appreciation. I was honored to contribute a piece of interactive art in support of the Employment Specialist Department and their incredible work.',
      link: 'https://dev-otedgamer.github.io/Flower',
      playLink: 'https://dev-otedgamer.github.io/Flower',
      controls: 'This is a short, looping animation.'
    },
    {
      image: 'Image/FlowerArms1.png',
      title: 'LifeWorks Happy Flower Project – Personal Reflection',
      description: 'Sometimes a little sadness can grow into something overwhelming—and in those moments, I’ve learned it’s okay to ask for help. LifeWorks NW has been there for me during those times, and I’m grateful for their support.',
      link: 'https://dev-otedgamer.github.io/Flower',
      playLink: 'https://dev-otedgamer.github.io/Flower',
      controls: 'This is a short, looping animation.'
    },
    {
      image: 'Image/FlowerArms2.png',
      title: 'LifeWorks Happy Flower Project – Rediscovering Passion',
      description: 'With guidance from the Employment Specialists at LifeWorks NW, I secured a security position at Microchip Technology in Gresham, OR. That experience helped reignite my passion for technology—especially game development and software design.',
      link: 'https://dev-otedgamer.github.io/Flower',
      playLink: 'https://dev-otedgamer.github.io/Flower',
      controls: 'This is a short, looping animation.'
    },
    {
      image: 'Image/FlowerDance.png',
      title: 'LifeWorks Happy Flower Project – A Journey of Growth',
      description: 'Over the past three years, I’ve been on an incredible journey of learning and self-discovery. LifeWorks NW has been there every step of the way, offering support when I needed it most. To everyone at LifeWorks NW—thank you, and please keep doing the amazing work you do!',
      link: 'https://dev-otedgamer.github.io/Flower',
      playLink: 'https://dev-otedgamer.github.io/Flower',
      controls: 'This is a short, looping animation.'
    }
  ],
  [
    {
      image: 'Image/CoinsGoneWildStart.png',
      title: 'Coins-Gone-Wild – Final Boot Camp Project',
      description: 'Developed in Unity using C#, this was my final assignment for the Game Developer Boot Camp at The Tech Academy in Portland, OR. The challenge was to create a game with a win condition under a strict time limit. I’ll admit—I was unprepared and spent too much time exploring ideas that weren’t feasible within the deadline.',
      link: 'https://dev-otedgamer.github.io/CoinsGoneWildIndex.html',
      playLink: 'https://dev-otedgamer.github.io/WebGLBuildCoinsGoneWild/index.html',
      controls: 'WASD/Arrow keys to move, Space to jump.'
    },
    {
      image: 'Image/CoinsGoneWildCoinSnip.png',
      title: 'Coins-Gone-Wild – Simplified Concept',
      description: 'With time running out, I pivoted to a coin collector game. I kept the mechanics simple and focused on completing a playable prototype. Although I had many creative ideas for expanding the concept, I had to cut them due to time constraints and unpredictable implementation challenges.',
      link: 'https://dev-otedgamer.github.io/CoinsGoneWildIndex.html',
      playLink: 'https://dev-otedgamer.github.io/WebGLBuildCoinsGoneWild/index.html',
      controls: 'WASD/Arrow keys to move, Space to jump.'
    },
    {
      image: 'Image/CoinsGoneWildJumping.png',
      title: 'Coins-Gone-Wild – Lessons in Scope and Planning',
      description: 'This project taught me valuable lessons about the importance of planning in game development. Even a simple game requires thoughtful design—features, level layout, gameplay flow, and more. Sometimes, cutting features is necessary to ensure the project is completed and playable.',
      link: 'https://dev-otedgamer.github.io/CoinsGoneWildIndex.html',
      playLink: 'https://dev-otedgamer.github.io/WebGLBuildCoinsGoneWild/index.html',
      controls: 'WASD/Arrow keys to move, Space to jump.'
    },
    {
      image: 'Image/CoinsGoneWildPlayerSnip.png',
      title: 'Coins-Gone-Wild – Final Reflection',
      description: '"Under promise, over deliver—but above all, deliver what you promise." This project reminded me that finishing strong, even with a scaled-back scope, is more valuable than chasing perfection and missing the mark.',
      link: 'https://dev-otedgamer.github.io/CoinsGoneWildIndex.html',
      playLink: 'https://dev-otedgamer.github.io/WebGLBuildCoinsGoneWild/index.html',
      controls: 'WASD/Arrow keys to move, Space to jump.'
    }
  ],
  [
    {
      image: 'Image/DigDugStartAnimation.gif',
      title: 'DiG DUG Remake – Internship Project',
      description: 'During my time at The Tech Academy, I completed a two-week internship with Prosper I.T. Consulting. My assignment was to recreate the classic arcade game DiG DUG using Unity and C#. I collaborated with a team of developers, each working on different retro game remakes. We followed Agile Scrum methodologies, including sprint planning, daily standups, and weekly retrospectives.',
      link: 'https://dev-otedgamer.github.io/DigDug',
      playLink: 'https://dev-otedgamer.github.io/DigDugWebGLBuild/digDugIndex',
      controls: 'WASD/Arrow keys to move, Arrow + Space to dig, Z to attack.'
    },
    {
      image: 'Image/DigDugGamePlay1new.gif',
      title: 'DiG DUG Remake – Custom Art Assets',
      description: 'I applied lessons from previous projects and created custom assets using MS Paint, including the dirt tiles and other missing sprites. These were converted into usable Unity sprites, allowing for a cohesive and retro-inspired visual style.',
      link: 'https://dev-otedgamer.github.io/DigDug',
      playLink: 'https://dev-otedgamer.github.io/DigDugWebGLBuild/digDugIndex',
      controls: 'WASD/Arrow keys to move, Arrow + Space to dig, Z to attack.'
    },
    {
      image: 'Image/DigDugCodeSnip.PNG',
      title: 'DiG DUG Remake – Procedural Map Generation',
      description: 'Using C#, I developed a map generator that dynamically spawns tiles, rocks, and enemies. I integrated a monster asset pack that included skull sprites, which I used to visually indicate when enemies enter a phase where they can travel through terrain.',
      link: 'https://dev-otedgamer.github.io/DigDug',
      playLink: 'https://dev-otedgamer.github.io/DigDugWebGLBuild/digDugIndex',
      controls: 'WASD/Arrow keys to move, Arrow + Space to dig, Z to attack.'
    },
    {
      image: 'Image/DigDugGameOver.gif',
      title: 'DiG DUG Remake – UI and Animation Polish',
      description: 'I created short animations for the start screen, continue screen, and game over screen to enhance the player experience. The project was completed on time and delivered as a fully playable WebGL build.',
      link: 'https://dev-otedgamer.github.io/DigDug',
      playLink: 'https://dev-otedgamer.github.io/DigDugWebGLBuild/digDugIndex',
      controls: 'WASD/Arrow keys to move, Arrow + Space to dig, Z to attack.'
    }
  ],
  [
   {
      image: 'Image/ConePlayerBP.PNG',
      title: 'Cone Survivor – Unreal Engine Blueprint Project',
      description: 'As part of a second internship with Prosper I.T. Consulting, I created Cone Survivor using Unreal Engine 5 and Blueprints. I was given full creative control, with the only requirement being to build a game entirely in Blueprints—no C++.',
      link: 'https://dev-otedgamer.github.io/ConeIndex.html'
    },
    {
      image: 'Image/ConeRifle.JPG',
      title: 'Cone Survivor – Round-Based FPS Concept',
      description: 'I designed a round-based survival first-person shooter with a unique cone-themed aesthetic. All assets were created in-engine using Unreal’s modeling tools. I even embraced a bug that caused enemies to phase through walls—turning them into ghost-like adversaries.',
      link: 'https://dev-otedgamer.github.io/ConeIndex.html'
    },
    {
      image: 'Image/ConeVendorList.PNG',
      title: 'Cone Survivor – Progression and Upgrades',
      description: 'To support player progression, I implemented a vendor system offering upgrades like new weapons, increased fire rate, temporary speed boosts, and body armor. Coins dropped by ghost enemies are used to unlock these vendors, which are hidden behind destructible cone-shaped barriers.',
      link: 'https://dev-otedgamer.github.io/ConeIndex.html'
    },
    {
      image: 'Image/ConeGameOver.PNG',
      title: 'Cone Survivor – Project Completion and Future Plans',
      description: 'While not as polished as my DiG DUG remake, I successfully completed all 10 user stories and delivered a functional prototype. I plan to continue developing Cone Survivor to expand its mechanics and bring the full vision to life.',
      link: 'https://dev-otedgamer.github.io/ConeIndex.html'
    }
  ],
  // Add project arrays
];

let currentProject = 0;
let currentSlide = 0;

function showSlide(projectIndex, slideIndex) {
  const slide = slideshows[projectIndex][slideIndex];
  modalImage.src = slide.image;
  modalTitle.textContent = slide.title;
  modalDescription.textContent = slide.description;
  modalLink.href = slide.link;

  // New additions
  const playLink = document.getElementById('playLink');
  const controlsText = document.getElementById('controlsText');

  if (slide.playLink) {
    playLink.href = slide.playLink;
    playLink.style.display = 'inline-block';
  } else {
    playLink.style.display = 'none';
  }

  controlsText.textContent = slide.controls || '';

}

function spinImageToSlide(nextIndex) {
  modalImage.classList.add('spin');

  setTimeout(() => {
    currentSlide = (nextIndex + slideshows[currentProject].length) % slideshows[currentProject].length;
    showSlide(currentProject, currentSlide);
  }, 300);

  setTimeout(() => {
    modalImage.classList.remove('spin');
  }, 600);
}

document.getElementById('nextSlide').addEventListener('click', () => {
  spinImageToSlide(currentSlide + 1);
});

document.getElementById('prevSlide').addEventListener('click', () => {
  spinImageToSlide(currentSlide - 1);
});

closeButton.addEventListener('click', () => {
  modal.classList.add('hidden');
});

document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', () => {
    const projectIndex = parseInt(card.dataset.project);
    currentProject = projectIndex;
    currentSlide = 0;

    card.classList.remove('card-spin');
    void card.offsetWidth;
    card.classList.add('card-spin');

    setTimeout(() => {
      showSlide(currentProject, currentSlide);
      modal.classList.remove('hidden');
    }, 600); // Match the projectile delay
  });
});




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
    void hitElement.offsetWidth;
    hitElement.classList.add('card-spin');

    const projectIndex = parseInt(hitElement.dataset.project);
    setTimeout(() => {
      currentProject = projectIndex;
      currentSlide = 0;
      showSlide(currentProject, currentSlide);
      modal.classList.remove('hidden');
    }, 1200); // Wait for spin to finish
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

    // Play gun sound
  const gunSound = document.getElementById('gun-sound');
  if (gunSound) {
    gunSound.currentTime = 0;
    gunSound.play();
  }


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

    // Set default style (milky yellowish white)
    btn.classList.remove('lit'); // Ensure it's not lit by default

    // Add click listener directly to each button
    btn.addEventListener('click', () => {
      // Remove lit class from all buttons
      document.querySelectorAll('.floor-buttons button').forEach(b => b.classList.remove('lit'));

      // Add lit class to the clicked button
      btn.classList.add('lit');
    });

    container.appendChild(btn);
  });

  // Add event delegation for triggering elevator sequence
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

  // After 0.5s shake, play chime, then pause, then open doors
  setTimeout(() => {
    elevator.classList.remove('shake');

    //  Play elevator chime here
    const chime = document.getElementById('elevator-chime');
    if (chime) {
      chime.currentTime = 0;
      chime.play();
    }

    // Wait a moment before opening doors
    setTimeout(() => {
      openDoors();

      // After 1s door animation, hide interior and show floor content
      setTimeout(() => {
        hideElevatorInterior();
        showContent(floor);
      }, 1000);

    }, 900); // Slight pause before doors open

  }, 500); // Shake duration
}


function openDoors() {
  leftDoor.classList.add('open-left');
  rightDoor.classList.add('open-right');
  // Play elevator chime
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
    // Reset lit state on floor buttons
    document.querySelectorAll('.floor-buttons button').forEach(btn => btn.classList.remove('lit'));

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