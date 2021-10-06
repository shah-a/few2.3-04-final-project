import { useSelector } from 'react-redux';
import Array from './Array';

const ArrayList = () => {
  const arrays = useSelector((state) => state.arrays);

  const arrayList = arrays.map((array, index) => (
    <Array
      key={array.id}
      index={index}
      placeholder={array.placeholder}
      value={array.value}
    />
  ));

  return (
    <section className="ArrayList w-full outline">
      {arrayList}
    </section>
  );
};

export default ArrayList;
