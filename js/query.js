export const selectionButtons = document.querySelectorAll('[data-selection]');
export const finalColumn = document.querySelector('[data-final-column]');
export const computerScoreSpan = document.querySelector('[data-computer-score]');
export const yourScoreSpan = document.querySelector('[data-your-score]');
export const roundInfoCount = document.querySelector('.round-info-count');
export const roundInfoResult = document.querySelector('.round-info-result');
export const SELECTIONS = [
  {
    name: 'rock',
    emoji: '✊',
    beats: 'scissors',
  },
  {
    name: 'scissors',
    emoji: '✌',
    beats: 'paper',
  },
  {
    name: 'paper',
    emoji: '✋',
    beats: 'rock',
  },
];