import ArrayCount from './ArrayCount';
import ArrayInput from './ArrayInput';
import AlgoSelectList from './AlgoSelectList';

const ConfigList = () => (
  <section className="ConfigList w-full">
    <div className="outline">
      <h2>Configuration</h2>
    </div>
    <ArrayCount />
    <ArrayInput />
    <AlgoSelectList />
    <div className="outline">
      <button type="button" id="start-button" className="config-button">Start</button>
    </div>
  </section>
);

export default ConfigList;
