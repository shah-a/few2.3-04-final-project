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

export const generateArrayValues = (arrayLength) => async (dispatch, getState) => {
  // await new Promise((res, rej) => setTimeout(res, 1500));
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

export const clearArrayValues = () => ({
  type: CLEAR_ARRAY_VALUES,
});
