import {createContext} from "react";

const initialContext = {
  dispatch:{},
  state: {
  user: 'Csaba',
  solution: 'candy',
  currentWord: ['c', 'a', 'n'],
  round: 0,
  guesses: [],
  }
};

export const WordleContext = createContext(null);

