import {useEffect, useReducer} from "react";
import { ToastContainer } from 'react-toastify';
import { useImmerReducer } from 'use-immer';
import Board from './components/Board';
import { WordleContext } from './context/context';
import reducer from './reducer';


const initialContext = {
  user: 'Csaba',
  solution: '',
  currentWord: [],
  round: 0,
  guesses: [],
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialContext);

  useEffect(()=>{
    dispatch({type: "SET_SOLUTION"})

},[])

  return (
    <WordleContext.Provider value={{ state, dispatch }}>
      <div className="container text-center mt-5">
        <h1 className="mb-3 border-bottom pb-2">Wordle clone with React</h1>
        <Board />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
    </WordleContext.Provider>
  );
}

export default App;
