import { useSelector } from 'react-redux';
import AlgoSelect from './AlgoSelect';

const AlgoSelectList = () => {
  const arrays = useSelector((state) => state.arrays);

  const algoSelectList = arrays.map((array, index) => {
    if (array.visible) {
      return (
        <AlgoSelect
          key={`algo-${array.id}`}
          index={index}
        />
      );
    }
    return null;
  });

  return (
    <div className="AlgoSelect outline">
      <h3>Which Sorting Algorithms?</h3>
      <div className="space-y-2">
        {algoSelectList}
      </div>
    </div>
  );
};

export default AlgoSelectList;
