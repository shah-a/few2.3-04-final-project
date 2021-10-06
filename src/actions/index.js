// import fetchValues from '../utils/fetchValues';

export const UPDATE_ARRAY_VALUE = 'UPDATE_ARRAY_VALUE';
export const UPDATE_ARRAY_VISIBILITY = 'UPDATE_ARRAY_VISIBILITY';
export const UPDATE_ARRAY_ALGO = 'UPDATE_ARRAY_ALGO';
export const GENERATE_ARRAY_VALUES = 'GENERATE_ARRAY_VALUES';
export const CLEAR_ARRAY_VALUES = 'CLEAR_ARRAY_VALUES';

export const updateArrayValue = (index, value) => ({
  type: UPDATE_ARRAY_VALUE,
  payload: { index, value },
});

export const updateArrayVisibility = (count) => ({
  type: UPDATE_ARRAY_VISIBILITY,
  payload: { count },
});

export const updateArrayAlgo = (index, algo) => ({
  type: UPDATE_ARRAY_ALGO,
  payload: { index, algo },
});

export const generateArrayValues = (arrayCount, arrayLength) => async (dispatch, getState) => {
  const { arrays } = getState();

  arrays.forEach((array, index) => {
    if (array.visible) {
      let value = '';

      for (let i = 0; i < arrayLength - 1; i += 1) {
        const num = Math.floor(Math.random() * 500);
        value += `${num}, `;
      }
      value += Math.floor(Math.random() * 500);

      dispatch(updateArrayValue(index, value));
    }
  });
};

// // Alternate method, using random.org:
// export const generateArrayValues = (arrayCount, arrayLength) => async (dispatch, getState) => {
//   const [values, err] = await fetchValues(arrayCount, arrayLength);
//   if (err) {
//     return alert('Error! Something went wrong.');
//   }
//   values.forEach((value, index) => {
//     dispatch(updateArrayValue(index, value));
//   });
// };

export const clearArrayValues = () => ({
  type: CLEAR_ARRAY_VALUES,
});
