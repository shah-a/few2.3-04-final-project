const AlgoSelect = () => (
  <div className="AlgoSelect">
    <label className="space-x-2">
      <span>Array #1:</span>
      <select className="p-2 text-black rounded-sm">
        <option value="bubble">Bubble Sort</option>
        <option value="selection">Selection Sort</option>
        <option value="insertion">Insertion Sort</option>
      </select>
    </label>
  </div>
);

export default AlgoSelect;
