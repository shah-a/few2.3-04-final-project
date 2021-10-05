const ArrayCount = () => (
  <div className="ArrayCount outline">
    <h3>How Many Arrays?</h3>
    <div className="array-count-card slider-card">
      <label htmlFor="array-count" id="array-count-label" className="slider-label">3</label>
      <input type="range" id="array-count" className="range-slider" min="2" max="5" step="1" value="3" />
    </div>
  </div>
);

export default ArrayCount;
