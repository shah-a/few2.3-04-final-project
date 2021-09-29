const ACTION = 'ACTION';

const action = (val) => ({
  type: ACTION,
  payload: { val },
});

export {
  ACTION,
  action,
};
