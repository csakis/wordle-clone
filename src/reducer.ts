import { validateWordleGuess } from './validate';
import {dictionary} from "./dictionary.js"

const reducer = (state, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case 'ADD_LETTER':
      return {
        ...state,
        currentWord: [...state.currentWord, payload.toUpperCase()],
      };

    case 'SET_SOLUTION':
      const solution = dictionary[Math.floor(Math.random()*dictionary.length)].toUpperCase();
      return {
        ...state,
        solution,
      };

    case 'REMOVE_LETTER':
      return {
        ...state,
        currentWord: [...state.currentWord].slice(0, -1),
      };
    case 'RESET':
      console.log('doing reset')
      return {
        ...state,
        currentWord: [],
        guesses: []
      };

    case 'SUBMIT_WORD':
      const currentWord = state.currentWord.join('');
      const guess = validateWordleGuess(state.solution, currentWord);
      return {
        ...state,
        currentWord: [],
        guesses: [...state.guesses, guess]
      };

    default:
      return state;
  }
};

export default reducer;
