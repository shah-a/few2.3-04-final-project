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
      <div className="space-x-1">
        <button type="button">Generate Random Numbers</button>
        <button type="button">Clear All</button>
      </div>
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
