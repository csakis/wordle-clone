import React, { useContext } from 'react';
import { WordleContext } from '../../context/context';
import Tile from "../Tile";
import styles from './Guesses.module.css';

export function Guesses() {
  const { state, dispatch } = useContext(WordleContext);
  const { guesses } = state;

  return (
    <div className="row">
      {guesses.map((guess, index) => {
        return (
          <div key={index} className="d-flex flex-row justify-content-center">
            {guess.map((guess, index) => {
              const { letter, state} = guess
              return <Tile key={index} letterStyle={state} letter={letter}/>;
            })}
          </div>
        );
      })}
    </div>
  );
}
