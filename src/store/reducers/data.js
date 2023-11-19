import {
  DATA_SUCCESS,
  DATA_FAILURE,
  CLEAN_STATE
} from '../actions/types';

const initialState = {
  data: [],
  error: null
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case DATA_SUCCESS: {
      return {
        ...state,
        data: [...state.data, ...action.payload],
        error: null
      };
    }
    case DATA_FAILURE: {
      return {
        ...state,
        error: action.payload
      };
    }
    case CLEAN_STATE: {
      return {
        data: [],
        error: null
      };
    }
    default:
      return state;
  }
};

export default data;
