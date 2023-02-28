import { selectionButtons, finalColumn, computerScoreSpan, yourScoreSpan, roundInfoCount, roundInfoResult, SELECTIONS} from './query.js';
import { finishGame, randomSelection } from './functions.js';
import '../scss/main.scss'

selectionButtons.forEach((selBut) => {
  selBut.addEventListener('click', () => {
    // const selectionName = selBut.dataset.selection;
    const selectionName = selBut.getAttribute('data-selection');
    const selection = SELECTIONS.find(
      (selection) => selection.name === selectionName
    );
    makeSelection(selection);
  });
});

const makeSelection = (selection) => {
  const computerSelection = randomSelection();
  const yourWinner = isWinner(selection, computerSelection);
  const computerWinner = isWinner(computerSelection, selection);

  addSelectionResult(computerSelection, computerWinner);
  addSelectionResult(selection, yourWinner);

  roundInfoResult.textContent = 'A draw in the round!';
  roundInfoResult.classList.remove('won');
  roundInfoResult.classList.remove('lost');

  if (yourWinner) {
    incrementScore(yourScoreSpan);
    roundInfoResult.textContent = 'You`ve WON!';
    roundInfoResult.classList.add('won');
    if (yourScoreSpan.innerText == 3) {
      roundInfoResult.textContent = 'You`ve WON three times! Press reset to try again.';
      selectionButtons.forEach((btn) => finishGame(btn));
    }
  } else if (computerWinner) {
    incrementScore(computerScoreSpan);
    roundInfoResult.textContent = 'You`ve LOST!';
    roundInfoResult.classList.add('lost');
    if (computerScoreSpan.innerText == 3) {
      roundInfoResult.textContent = 'You`ve LOST three times! Press reset to try again.';
      selectionButtons.forEach((btn) => finishGame(btn));
    }
  }

  incrementScore(roundInfoCount);
}

const isWinner = (selection, opponentSelection) => {
  return selection.beats === opponentSelection.name;
};

const addSelectionResult = (selection, winner) => {
  const div = document.createElement('div');
  div.innerText = selection.emoji;
  div.classList.add('result-selection');

  if (winner) {
    div.classList.add('winner');
  }

  finalColumn.after(div);
};

const incrementScore = (scoreSpan) => {
  scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1;
};


