// Access HTML elements

let body = document.body;
let instructionsBtn = document.getElementById('instructions-btn');
let wireElement1 = document.getElementById('wire1');
let wireElement2 = document.getElementById('wire2');
let wireElement3 = document.getElementById('wire3');
let wires = document.getElementsByClassName('wire-compartment');
let menuOverlay = document.getElementById('menu-container');
let startButton = document.getElementById('start');
let bomb = document.getElementById('bomb-container');
let panelCover = document.getElementById('panel-cover');
let panel = document.getElementById('wire-panel');
let wireCompartment = document.getElementById('compartment');
let streaks = document.getElementsByClassName('falling-streak');
let flagPole = document.getElementById('flag-pole');
const panelTimeout = 1500;

//wire related assets
let redWirePath = 'assets/images/red_wire.svg';
let greenWirePath = 'assets/images/green_wire.svg';
let blueWirePath = 'assets/images/blue_wire.svg';
let cutRedWirePath = 'assets/images/cut_red_wire.svg';
let cutGreenWirePath = 'assets/images/cut_green_wire.svg';
let cutBlueWirePath = 'assets/images/cut_blue_wire.svg';

//state variables
let numIntactWires = 3;
let wire1;
let wire2;
let wire3;
let currentlyPlaying = false;

// Prevent right-click context menu from appearing
document.addEventListener('contextmenu', event => {
  event.preventDefault();
});

// Define game logic to check wires, progress game, end game, and choose a random dangerous wire
let fixWires = () => {
  for (let wire of wires) {
    wire.classList.add("intact");
  }
}

let isClicked = (wire) => {
  if (wire.classList.contains("intact")) {
    return true;
  } else {
    return false;
  }
}

let isWrongWire = (wire) => {
  if (wire.classList.contains("dangerous") === true) {
    return true;
  } else {
    return false;
  }
}

let winAnimation = () => {
  party.sparkles(body);
  party.confetti(body);
}

let gameOver = (status) => {
  if (status === 'win') {
    startButton.innerHTML = 'You win! <br>Play again?';
    winAnimation();
    setTimeout(() => {showMenuOverlay()}, 1000);
  } else {
    startButton.innerHTML = 'Game over! <br>Play again?';
    flagPole.classList.add('explode');
    // setTimeout(() => {bomb.classList.add('falling');}, 3000);
    setTimeout(() => {showMenuOverlay()}, 600);
  }
  wireElement1.classList.remove('dangerous');
  wireElement2.classList.remove('dangerous');
  wireElement3.classList.remove('dangerous');
  currentlyPlaying = false
}

let cutWire = (wire) => {
  wire.classList.remove('intact');
  numIntactWires--;
  if (numIntactWires === 0) {
    gameOver('win');
  } else if (isWrongWire(wire) === true) {
    gameOver();
  }
}

let randomWireGenerator = (wireCompartment) => {
  wireCompartment = Math.floor(Math.random() * numIntactWires);
  if (wireCompartment === 0) {
    wire1 = redWirePath;
    wire2 = blueWirePath;
    wire3 = greenWirePath;
  } else if (wireCompartment === 1) {
      wire1 = blueWirePath;
      wire2 = greenWirePath;
      wire3 = redWirePath;
  } else {
      wire1 = greenWirePath;
      wire2 = redWirePath;
      wire3 = blueWirePath;
  }
}

let wrongWireGenerator = (wrongWire) => {
  wrongWire = Math.floor(Math.random() * numIntactWires);
  if (wrongWire === 0) {
    wireElement1.classList.add('dangerous');
  } else if (wrongWire === 1) {
    wireElement2.classList.add('dangerous');
  } else {
    wireElement3.classList.add('dangerous');
  }
}

wireElement1.onclick = () => {
  if (currentlyPlaying && isClicked(wireElement1)) {
    if (wireElement1.src.toString().includes('red')) {
      wireElement1.src = cutRedWirePath;
    } else if (wireElement1.src.toString().includes('green')) {
      wireElement1.src = cutGreenWirePath;
    } else {
      wireElement1.src = cutBlueWirePath;
    }
    cutWire(wireElement1);
  }
}

wireElement2.onclick = () => {
  if (currentlyPlaying && isClicked(wireElement2)) {
    if (wireElement2.src.toString().includes('red')) {
      wireElement2.src = cutRedWirePath;
    } else if (wireElement2.src.toString().includes('green')) {
      wireElement2.src = cutGreenWirePath;
    } else {
      wireElement2.src = cutBlueWirePath;
    }
    cutWire(wireElement2)
  }
}

wireElement3.onclick = () => {
  if (currentlyPlaying && isClicked(wireElement3)) {
    if (wireElement3.src.toString().includes('red')) {
      wireElement3.src = cutRedWirePath;
    } else if (wireElement3.src.toString().includes('green')) {
      wireElement3.src = cutGreenWirePath;
    } else {
      wireElement3.src = cutBlueWirePath;
    }
    cutWire(wireElement3);
  }
}

let streakVisibility = () => {
  for (let streak of streaks) {
    streak.style.visibility = "visible";
  }
}

let hideStreaks = () => {
  for (let streak of streaks) {
    streak.style.visibility = "hidden";
  };
}

let dropBomb = () => {
  panel.style.backgroundImage = "url('assets/images/wire_panel.svg')";
  bomb.classList.add('start-falling');
  setTimeout(() => {bomb.classList.add('falling');}, 3000);
  setTimeout(() => {panelCover.classList.add('fly-off'); streakVisibility();}, panelTimeout);
  startButton.scrollIntoView({behavior: "smooth"});
}

instructionsBtn.onclick = () => {
  if (menuOverlay.classList.contains("fade-out")) {
    showMenuOverlay();
  } else {
    hideMenuOverlay();
  }
}

startButton.onclick = () => {
  if (currentlyPlaying === false) {
    startRound();
  }
  if (menuOverlay.classList.contains("fade-in")) {
    hideMenuOverlay();
  }
}

let hideMenuOverlay = () => {
  menuOverlay.classList.remove("fade-in");
  menuOverlay.classList.add("fade-out");
}

let showMenuOverlay = () => {
  menuOverlay.classList.remove("fade-out");
  menuOverlay.classList.add("fade-in")
}

// Start a game round
let startRound = () => {
  hideMenuOverlay();
  hideStreaks();
  fixWires();
  bomb.classList.remove('falling', 'start-falling');
  flagPole.classList.remove('explode');
  panelCover.classList.remove('fly-off');
  numIntactWires = 3;
  currentlyPlaying = true;
  randomWireGenerator();
  wrongWireGenerator();
  wireElement1.src = wire1;
  wireElement2.src = wire2;
  wireElement3.src = wire3;
  dropBomb();
  setTimeout(() => {startButton.innerHTML = 'Continue';}, 500); 
}


