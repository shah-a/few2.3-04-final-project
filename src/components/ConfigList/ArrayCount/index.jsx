import { useDispatch } from 'react-redux';
import { updateArrayVisibility } from '../../../actions';

const ArrayCount = ({ arrayCount, setArrayCount }) => {
  const dispatch = useDispatch();

  return (
    <div className="ArrayCount outline">
      <h3>How Many Arrays?</h3>
      <label className="slider">
        <span>{arrayCount}</span>
        <input
          type="range"
          min="2"
          max="5"
          step="1"
          value={arrayCount}
          onChange={(e) => {
            setArrayCount(e.target.value);
            dispatch(updateArrayVisibility(parseInt(e.target.value, 10)));
          }}
        />
      </label>
    </div>
  );
};

export default ArrayCount;
