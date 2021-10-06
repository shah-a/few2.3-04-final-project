import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateArrayVisibility } from '../../../actions';

const ArrayCount = () => {
  const [slider, setSlider] = useState(3);
  const dispatch = useDispatch();

  return (
    <div className="ArrayCount outline">
      <h3>How Many Arrays?</h3>
      <label className="slider">
        <span>{slider}</span>
        <input
          type="range"
          min="2"
          max="5"
          step="1"
          value={slider}
          onChange={(e) => {
            setSlider(e.target.value);
            dispatch(updateArrayVisibility(e.target.value));
          }}
        />
      </label>
    </div>
  );
};

export default ArrayCount;
