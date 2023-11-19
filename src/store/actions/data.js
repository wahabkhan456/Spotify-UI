import {
  DATA_REQUEST,
  DATA_SUCCESS,
  DATA_FAILURE,
  CLEAN_STATE
} from './types';

const getData = payload => ({ type: DATA_REQUEST, payload });

const dataSuccess = payload => ({ type: DATA_SUCCESS, payload });

const dataFailure = payload => ({ type: DATA_FAILURE, payload });

const cleanState = _ => ({ type: CLEAN_STATE });

export {
  getData,
  dataSuccess,
  dataFailure,
  cleanState
}