export const UPDATE_ARRAY_VALUE = 'UPDATE_ARRAY_VALUE';
export const UPDATE_ARRAY_VISIBILITY = 'UPDATE_ARRAY_VISIBILITY';

export const updateArrayValue = (index, value) => ({
  type: UPDATE_ARRAY_VALUE,
  payload: { index, value },
});

export const updateArrayVisibility = (count) => ({
  type: UPDATE_ARRAY_VISIBILITY,
  payload: { count },
});
