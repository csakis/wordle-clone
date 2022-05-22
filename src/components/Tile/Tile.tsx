import { useContext } from 'react';
import { WordleContext } from '../../context/context';
import { CORRECT, OUT_OF_PLACE, WRONG } from "../../validate";

function Tile(props) {
  const { letter, letterStyle } = props;
  let background = '';
  switch (letterStyle) {
    case CORRECT:
      background = 'matchedClass';
      break;
    case OUT_OF_PLACE:
      background = 'correctClass';
      break;
    case WRONG:
      background = 'missedClass';
      break;
    default:
      break;
  }

  return (
    <div
      className={"m-1 justify-content-center align-items-center border border-dark border-2 " + background}
      style={{ width: '3.5rem', minHeight: '3.5rem' }}
    >
      <span className="fs-1 fw-bolder text-white">{letter}</span>
    </div>
  );
}
export default Tile;
