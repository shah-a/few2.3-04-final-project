export const UPDATE_ARRAY_VALUE = 'UPDATE_ARRAY_VALUE';
export const UPDATE_ARRAY_VISIBILITY = 'UPDATE_ARRAY_VISIBILITY';
export const UPDATE_ARRAY_ALGO = 'UPDATE_ARRAY_ALGO';
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

export const clearArrayValues = () => ({
  type: CLEAR_ARRAY_VALUES,
});
