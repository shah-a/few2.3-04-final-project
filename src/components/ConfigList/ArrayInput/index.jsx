const ArrayInput = () => (
  <div className="ArrayInput outline">
    <h3>How Many Numbers Per Array?</h3>
    <div className="array-length-card slider-card">
      <label htmlFor="array-length" id="array-length-label" className="slider-label">275</label>
      <input type="range" id="array-length" className="range-slider" min="50" max="500" step="25" value="275" />
    </div>
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

export default ArrayInput;
