var screen = document.querySelectorAll(".screen")

var startBtn = document.querySelector("button")

var allElems = document.querySelectorAll(".elem")

startBtn.addEventListener("click", function () {
  screen[1].style.transform = "translateY(-100%)"
})


allElems.forEach(function (elem) {
  elem.addEventListener("click", function () {
    screen[2].style.transform = "translateY(-200%)"
  })
})

const startButton = document.querySelector('.startbtn');
startButton.addEventListener('click', () => {
  startButton.style.display = 'none';

})

document.addEventListener('DOMContentLoaded', function () {
  const startButtons = document.querySelectorAll('.startbtn');
  const monsterElemsScreen2 = document.querySelectorAll('.screen:nth-child(2) .elem');
  const playground = document.querySelector('.screen:nth-child(3) .playground');

  let activeMonster = null;

  function getRandomPosition() {
    const playgroundRect = playground.getBoundingClientRect();
    const maxX = playgroundRect.width - 120;
    const maxY = playgroundRect.height - 120;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    return { x: randomX, y: randomY };
  }

  function moveMonsterToPlayground(monsterElem) {
    const randomPosition = getRandomPosition();
    monsterElem.style.position = 'absolute';
    monsterElem.style.left = `${randomPosition.x}px`;
    monsterElem.style.top = `${randomPosition.y}px`;
    monsterElem.classList.add('active');

    monsterElem.addEventListener('click', function handleClick() {
      const newRandomPosition = getRandomPosition();
      monsterElem.style.left = `${newRandomPosition.x}px`;
      monsterElem.style.top = `${newRandomPosition.y}px`;
    });

    activeMonster = monsterElem;
  }

  startButtons.forEach((startButton) => {
    startButton.addEventListener('click', () => {
      monsterElemsScreen2.forEach((monsterElem) => {
        moveMonsterToPlayground(monsterElem);
      });
      startButton.style.display = 'none'; // Hide the start button
    });
  });

  // Example function to retrieve the active monster in the playground
  function getActiveMonster() {
    if (activeMonster) {
      console.log('Active Monster:', activeMonster);
    } else {
      console.log('No active monster in the playground.');
    }
  }

  // Call this function wherever you need to get the active monster, for example:
  getActiveMonster();
});
