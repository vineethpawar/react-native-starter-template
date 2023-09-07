import {combineReducers} from '@reduxjs/toolkit';
import {loginReducer} from './login/login.store';
// ...

const rootReducer = combineReducers({
  user: loginReducer,
  // notification: notificationReducer,
  // ...other reducers
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
