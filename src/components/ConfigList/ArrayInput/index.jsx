import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { clearArrayValues } from '../../../actions';

const ArrayInput = () => {
  const [slider, setSlider] = useState(275);
  const dispatch = useDispatch();

  return (
    <div className="ArrayInput outline">
      {/* -------------*/}
      {/* INPUT SLIDER */}
      {/* ------------ */}
      <h3>How Many Numbers Per Array?</h3>
      <label className="slider">
        <span>{slider}</span>
        <input
          type="range"
          min="50"
          max="500"
          step="25"
          value={slider}
          onChange={(e) => {
            console.log('value changed');
            setSlider(e.target.value);
          }}
        />
      </label>

      {/* ------------------------------ */}
      {/* `GENERATE` AND `CLEAR` BUTTONS */}
      {/* ------------------------------ */}
      <div className="flex flex-col items-center space-y-1">
        <button
          type="button"
          onClick={() => console.log('button clicked')}
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
