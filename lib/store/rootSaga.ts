import {all} from 'redux-saga/effects';
import watchLoginActions from './login/login.saga';
// import watchNotificationsActions from './notifications/notifications.saga';

export function* rootSaga() {
  yield all([
    watchLoginActions(),
    // watchNotificationsActions(),
    // ...other sagas
  ]);
}
