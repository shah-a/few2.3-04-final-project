const AlgoSelect = () => (
  <div className="AlgoSelect">
    <label htmlFor="algorithm-1" className="algorithm-label">Array #1: </label>
    <select id="algorithm-1" className="algorithm-select">
      <option value="bubble">Bubble Sort</option>
      <option value="selection">Selection Sort</option>
      <option value="insertion">Insertion Sort</option>
    </select>
  </div>
);

export default AlgoSelect;
