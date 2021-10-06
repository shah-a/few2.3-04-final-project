const UPDATE_ARRAY_VALUE = 'UPDATE_ARRAY_VALUE';

const updateArrayValue = (index, value) => ({
  type: UPDATE_ARRAY_VALUE,
  payload: { index, value },
});

export {
  UPDATE_ARRAY_VALUE,
  updateArrayValue,
};
