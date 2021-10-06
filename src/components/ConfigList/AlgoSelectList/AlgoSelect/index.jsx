import { useDispatch } from 'react-redux';
import { updateArrayAlgo } from '../../../../actions';

const AlgoSelect = ({ index }) => {
  const dispatch = useDispatch();

  return (
    <div className="AlgoSelect">
      <label className="space-x-2">
        <span>{`Array #${index + 1}:`}</span>
        <select
          className="p-2 text-black rounded-sm"
          onChange={(e) => dispatch(updateArrayAlgo(index, e.target.value))}
        >
          <option value="bubble">Bubble Sort</option>
          <option value="selection">Selection Sort</option>
          <option value="insertion">Insertion Sort</option>
        </select>
      </label>
    </div>
  );
};

export default AlgoSelect;
