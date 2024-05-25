const rollBtn = document.getElementById("roll-btn");
const diceEl = document.getElementById("dice");
const rollHistoryEl = document.getElementById("roll-history");
const dices = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
let diceCounter = 0;

function getRandomDice() {
  const random = Math.floor(Math.random() * dices.length);
  const randomDice = dices[random];

  return randomDice;
}

function diceRoll() {
  const dice = getRandomDice();

  diceEl.classList.remove("animate__animated", "animate__flip");

  setTimeout(() => {
    diceEl.classList.remove("animate__animated", "animate__flip");
  }, 1000);
  diceEl.classList.add("animate__animated", "animate__flip");

  diceEl.innerHTML = dice;
  diceCounter++;

  setTimeout(() => {
    createHistoryItem(diceCounter, dice);
  }, 1300);
}

function createHistoryItem(counter, dice) {
  const li = document.createElement("li");
  li.innerHTML = `
  <li
  class="flex justify-between w-[300px] text-lg bg-slate-200 p-6 rounded-md shadow-lg md:w-[500px]"
  >
    <p class="font-semibold">Roll: ${counter}</p>
    <span class="md:text-[4rem]">${dice}</span>
  </li>
  `;

  rollHistoryEl.appendChild(li);
}

rollBtn.addEventListener("click", diceRoll);
