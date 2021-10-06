import { useDispatch } from 'react-redux';
import { generateArrayValues, clearArrayValues } from '../../../actions';

const ArrayInput = ({ arrayCount, arrayLength, setArrayLength }) => {
  const dispatch = useDispatch();

  return (
    <div className="ArrayInput outline">
      {/* -------------*/}
      {/* INPUT SLIDER */}
      {/* ------------ */}
      <h3>How Many Numbers Per Array?</h3>
      <label className="slider">
        <span>{arrayLength}</span>
        <input
          type="range"
          min="50"
          max="500"
          step="25"
          value={arrayLength}
          onChange={(e) => setArrayLength(e.target.value)}
        />
      </label>

      {/* ------------------------------ */}
      {/* `GENERATE` AND `CLEAR` BUTTONS */}
      {/* ------------------------------ */}
      <div className="flex flex-col items-center space-y-1">
        <button
          type="button"
          onClick={() => dispatch(generateArrayValues(arrayCount, arrayLength))}
        >
          Generate Random Numbers
        </button>
        <button
          type="button"
          onClick={() => dispatch(clearArrayValues())}
        >
          Clear All
        </button>
      </div>

      {/* ------------------ */}
      {/* LINK TO RANDOM.ORG */}
      {/* ------------------ */}
      <p>
        (Or manually enter
        {' '}
        <a
          href="https://www.random.org/integer-sets/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-900 transition-colors"
        >
          your own
        </a>
        )
      </p>
    </div>
  );
};

export default ArrayInput;
