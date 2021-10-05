import AlgoSelect from './AlgoSelect';

const AlgoSelectList = () => (
  <div className="AlgoSelect outline">
    <h3>Which Sorting Algorithms?</h3>
    <div className="space-y-2">
      <AlgoSelect />
      <AlgoSelect />
      <AlgoSelect />
      <AlgoSelect />
      <AlgoSelect />
    </div>
  </div>
);

export default AlgoSelectList;
