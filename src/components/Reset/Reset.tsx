import { useContext } from 'react';
import { WordleContext } from '../../context/context';

export function Reset() {
  const { state, dispatch } = useContext(WordleContext);
  function handleReset() {
    dispatch({ type: 'RESET' });
    dispatch({ type: 'SET_SOLUTION' });
  }
  return (
    <>
    <h3>
      Solution was: {state.solution}
      </h3>
    <button className="btn btn-warning" onClick={handleReset}>
      Reset
    </button>
    </>
  );
}
