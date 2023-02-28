import { SELECTIONS } from "./query.js";

export const randomSelection = () => {
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length);
    return SELECTIONS[randomIndex];
  };

export const finishGame = (btn) => {
    btn.setAttribute('disabled', '');
    btn.classList.add('disabled');
  };

  