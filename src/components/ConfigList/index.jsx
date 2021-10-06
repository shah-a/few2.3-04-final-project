import { useSelector } from 'react-redux';
import ArrayCount from './ArrayCount';
import ArrayInput from './ArrayInput';
import AlgoSelectList from './AlgoSelectList';

const ConfigList = () => {
  const arrays = useSelector((state) => state.arrays);

  return (
    <section className="ConfigList w-full space-y-3 text-center">
      <div className="outline">
        <h2>Configuration</h2>
      </div>
      <ArrayCount />
      <ArrayInput />
      <AlgoSelectList />
      <div className="outline">
        <button
          type="button"
          id="start-button"
          className="config-button"
          onClick={() => {
            console.log('Backend not yet implemented!');
            console.log(arrays);
          }}
        >
          Start
        </button>
      </div>
    </section>
  );
};

export default ConfigList;
