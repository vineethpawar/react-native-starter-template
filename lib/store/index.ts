import {configureStore} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import createSagaMiddlewere from 'redux-saga';

import rootReducer, {RootState} from './rootReducer';
import {rootSaga} from './rootSaga';

const saga = createSagaMiddlewere();

const store = configureStore({
  reducer: rootReducer,
  // Remove / Change the middleware as needed, we are currently using Redux saga
  middleware: [saga],
});

saga.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;
