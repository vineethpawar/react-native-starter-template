import {PayloadAction} from '@reduxjs/toolkit';
import {HttpService} from '../../services/http.service';
import {
  APPSTATES,
  ERROR_MESSAGES,
  EReqMethod,
} from '../../constants/apiCalls';
import {

  TUserDetailsPayload,
  TVerifyOtpPayload,
} from './types/login.payload.type';
import {sagaLoginAction} from './login.actions';
import {put, call, takeLatest} from 'redux-saga/effects';
import {loginActions} from './login.store';
import {
  TFetchInterestsResponse,
  TTriggerOTPResponse,
  TUpdateDetailsResponse,
  TVerifyOTPResponse,
  TVerifyUsernameAvailabilityResponse,
} from './types/login.successResponse.type';
import {storeData} from '../../services/auth.service';

export const sendOtp = (mobileNumber: string) => {
  return HttpService({
    method: EReqMethod.POST,
    url: <ENDPOINT>,
    body: {
      phone: mobileNumber,
      force_send_on_local: false,
    },
  });
};

export const verifyingOtp = ({
  otp,
  phone,
  clientType,
  clientFcmToken,
}: TVerifyOtpPayload) => {
  return HttpService({
    method: EReqMethod.POST,
    url: <ENDPOINT>,
    body: {
      phone,
      otp,
      clientType,
      clientFcmToken,
    },
  });
};

export const updateDetails = (payload: TUserDetailsPayload) => {
  return HttpService({
    method: EReqMethod.POST,
    url: <ENDPOINT>,
    body: payload,
    authRequired: true,
  });
};


function* triggerOtpSaga(action: PayloadAction<string>) {
  try {
    // reset otp data to avoid skiping OTP screen once user changes mopbile number
    yield put(loginActions.otpReset());
    yield put(loginActions.otpLoading());
    const response: TTriggerOTPResponse = yield call(sendOtp, action.payload);
    if (response?.resultStatus?.status === APPSTATES.SUCCESS) {
      yield put(loginActions.otpSuccess());
    } else {
      const errorMessage =
        response?.message || ERROR_MESSAGES.GENERIC_ERROR_MESSAGE;
      yield put(loginActions.otpFailed(errorMessage));
    }
  } catch (err: any) {
    yield put(loginActions.otpFailed(err));
    console.error('error', err);
  }
}

function* verifyOtpSaga(action: PayloadAction<TVerifyOtpPayload>) {
  try {
    console.log('otp body', action.payload);
    yield put(loginActions.verifyOtpLoading());
    const loginStatus: TVerifyOTPResponse = yield call(
      verifyingOtp,
      action.payload,
    );
    if (loginStatus?.resultStatus?.status === APPSTATES.SUCCESS) {
      storeData(loginStatus.sessionKey!, loginStatus.user);

      yield put(loginActions.updateDetailsInfo(loginStatus.user!));
      if (loginStatus.user?.interests?.length > 0) {
        yield put(loginActions.updateLoginStatus(true));
      }
      yield put(loginActions.verifyOtpSuccess());
    } else {
      const errorMessage =
        loginStatus?.message || ERROR_MESSAGES.GENERIC_ERROR_MESSAGE;
      yield put(loginActions.otpFailed(errorMessage));
    }
  } catch (err: any) {
    yield put(loginActions.verifyOtpFailed(err));
    console.error('error', err);
  }
}


// function* updateDetailsSaga(action: PayloadAction<TUserDetailsPayload>) {
//   try {
//     yield put(loginActions.updateDetailsLoading());
//     const loginStatus: TUpdateDetailsResponse = yield call(
//       updateDetails,
//       action.payload,
//     );
//     if (loginStatus.resultStatus.status === APPSTATES.SUCCESS) {
//       yield put(loginActions.updateDetailsInfo(loginStatus));
//       yield put(loginActions.updateDetailsSuccess());
//     } else {
//       yield put(loginActions.updateDetailsFailed(COMMON.GENERIC_ERROR_MESSAGE));
//     }
//   } catch (err: any) {
//     yield put(loginActions.updateDetailsFailed(err));
//     console.error('error', err);
//   }
// }
// ...



export default function* watchLoginActions() {
  yield takeLatest(sagaLoginAction.SEND_OTP, triggerOtpSaga);
  yield takeLatest(sagaLoginAction.LOGIN_USER, verifyOtpSaga);
  //  yield takeLatest(sagaLoginAction.UPDATE_DETAILS, updateDetailsSaga);
  // ...
}
