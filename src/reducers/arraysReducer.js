import { UPDATE_ARRAY_VALUE, UPDATE_ARRAY_VISIBILITY, UPDATE_ARRAY_ALGO } from '../actions';

/*
 * Note:
 * initialState has empty arrays for the "value" property.
 * However, the updateArray action function changes these
 * into strings. This is okay for now, because eventually
 * the inputs will need to be serialized before being sent
 * to the backend anyway. The backend can deserialize the
 * string back into an array and perform the necessary
 * computations. Validation should happen on the frontend
 * before hitting the API, though.
 *
 * To be implemented in the future.
 */

const initialState = [
  {
    id: 1,
    placeholder: 'E.g: 39, 71, 37, 87, 69, 48, 49, 45, 85, 63, 23, 13, 26, 76, 56, 99, 17, 1, 81, 25, 18, 15, 20, 68, 31...',
    value: [],
    algo: 'bubble',
    visible: true,
  },
  {
    id: 2,
    placeholder: 'E.g: 10, 62, 16, 94, 9, 46, 24, 91, 22, 3, 52, 35, 89, 12, 61, 30, 19, 28, 33, 77, 65, 93, 92, 7, 5...',
    value: [],
    algo: 'bubble',
    visible: true,
  },
  {
    id: 3,
    placeholder: 'E.g: 29, 21, 79, 2, 47, 97, 41, 96, 86, 59, 57, 73, 70, 72, 43, 84, 75, 82, 78, 55, 80, 11, 6, 8, 44...',
    value: [],
    algo: 'bubble',
    visible: true,
  },
  {
    id: 4,
    placeholder: 'E.g: 60, 64, 27, 36, 38, 90, 74, 14, 95, 50, 88, 83, 100, 53, 4, 51, 54, 66, 34, 67, 58, 98, 42, 32, 40...',
    value: [],
    algo: 'bubble',
    visible: false,
  },
  {
    id: 5,
    placeholder: 'E.g: 43, 46, 19, 56, 62, 95, 34, 38, 64, 10, 53,  6,  8, 80, 35, 90, 16, 42, 92, 70, 37, 67, 89, 87, 52...',
    value: [],
    algo: 'bubble',
    visible: false,
  },
];

const arraysReducer = (state = initialState, action) => {
  const newState = [...state];

  switch (action.type) {
    case UPDATE_ARRAY_VALUE:
      return newState.map((array, index) => {
        if (index === action.payload.index) {
          return { ...array, value: action.payload.value };
        }
        return { ...array };
      });
    case UPDATE_ARRAY_VISIBILITY:
      return newState.map((array, index) => {
        if (index < action.payload.count) {
          return { ...array, visible: true };
        }
        return { ...array, visible: false };
      });
    case UPDATE_ARRAY_ALGO:
      return newState.map((array, index) => {
        if (index === action.payload.index) {
          return { ...array, algo: action.payload.algo };
        }
        return { ...array };
      });
    default:
      return state;
  }
};

export default arraysReducer;
