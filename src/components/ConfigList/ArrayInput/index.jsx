import { useState } from 'react';

const ArrayInput = () => {
  const [slider, setSlider] = useState(275);

  return (
    <div className="ArrayInput outline">
      <h3>How Many Numbers Per Array?</h3>
      <label className="slider">
        <span>{slider}</span>
        <input
          type="range"
          min="50"
          max="500"
          step="25"
          value={slider}
          onChange={(e) => setSlider(e.target.value)}
        />
      </label>
      <button type="button" id="generate-button" className="config-button">Generate Random Numbers</button>
      <button type="button" id="clear-button" className="config-button">Clear All</button>
      <p>
        (Or manually enter
        {' '}
        <a className="link" target="_blank" href="https://www.random.org/integer-sets/" rel="noreferrer">your own</a>
        )
      </p>
    </div>
  );
};

export default ArrayInput;
