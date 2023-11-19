import { takeLatest, put, call } from 'redux-saga/effects';
import { DATA_REQUEST } from '../actions/types';
import { dataSuccess, dataFailure } from '../actions/data';

// TODO
function* dataSaga({ payload: { page } }) {
    try {
        const dataJSON = yield call(fetch, [`https://6006c4d63698a80017de1f20.mockapi.io/songs?page=${page}&limit=10`]);
        const data = yield call(_ => dataJSON.json());
        yield put(dataSuccess(data))
    }
    catch (error) {
        yield put(dataFailure(error))
    }
}

function* watchData() {
    yield takeLatest(DATA_REQUEST, dataSaga);
};

export {
    watchData
}