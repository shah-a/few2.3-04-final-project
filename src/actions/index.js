const UPDATE_ARRAY = 'UPDATE_ARRAY';

const updateArray = (index, value) => ({
  type: UPDATE_ARRAY,
  payload: { index, value },
});

export {
  UPDATE_ARRAY,
  updateArray,
};
