import { useDispatch } from 'react-redux';
import { updateArrayValue } from '../../../actions';

const Array = ({ index, placeholder, value }) => {
  const dispatch = useDispatch();

  return (
    <div className="Array">
      <label>
        <h2 className="mb-3">{`Array #${index + 1}:`}</h2>
        <textarea
          rows="7"
          placeholder={placeholder}
          value={value}
          className="w-full p-2 text-black text-xs leading-snug font-mono font-light"
          onChange={(e) => dispatch(updateArrayValue(index, e.target.value))}
        />
      </label>
    </div>
  );
};

export default Array;
