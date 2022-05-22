import useEventListener from '@use-it/event-listener';
import { useContext } from 'react';
import { toast } from 'react-toastify';
import { WordleContext } from '../../context/context';
import { Guesses } from '../Guesses';
import Tile from '../Tile';
import { dictionary } from '../../dictionary.js';
import {Reset} from "../Reset";

function Board() {
  const { state, dispatch } = useContext(WordleContext);
  useEventListener('keydown', handleKeyDown, window);

  function handleKeyDown(e: any) {
    e.preventDefault();
    const wordLength = state.currentWord.length;

    if (e.keyCode === 13 && wordLength !== 5) {
      toast.error('Word needs to be 5 letters');
    } else if (e.keyCode === 13 && wordLength === 5) {
      //check if word is in dictionary
      if (dictionary.includes(state.currentWord.join('').toLowerCase())) {
        dispatch({ type: 'SUBMIT_WORD' });
      } else {
        toast.error('Word is not in dictionary');
      }
      //backspace
    } else if (e.keyCode === 8 && wordLength > 0) {
      dispatch({
        type: 'REMOVE_LETTER',
      });
    } else if (e.keyCode < 65 || e.keyCode > 90) {
      toast.error('Only letters are allowed');
    } else if (wordLength >= 5) {
      toast.error('Max number of letters(5) reached');
    } else if (e.keyCode >= 65 && e.keyCode <= 90 && wordLength < 5) {
      dispatch({
        type: 'ADD_LETTER',
        payload: e.key,
      });
    }
  }

  {
    if (state.guesses.length <= 5) {
      return (
        <>
          <div className="d-flex flex-row justify-content-center">
            {[...Array(5)].map((_: any, i: number) => {
              const letter = state.currentWord[i] || ' ';
              return <Tile key={i} index={i} letter={letter} />;
            })}
          </div>
          <Guesses />
        </>
      );
    } else {
      return <Reset />
    }
  }
}
export default Board;
