import { useSelector } from 'react-redux';
import Array from './Array';

const ArrayList = () => {
  const arrays = useSelector((state) => state.arrays);

  const arrayList = arrays.map((array, index) => {
    if (array.visible) {
      return (
        <Array
          key={array.id}
          index={index}
          placeholder={array.placeholder}
          value={array.value}
        />
      );
    }
    return null;
  });

  return (
    <section className="ArrayList w-full outline">
      {arrayList}
    </section>
  );
};

export default ArrayList;
