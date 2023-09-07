import {TUserDetailsPayload, TVerifyOtpPayload} from '@store/post/types';

export const sagaLoginAction = {
  LOGIN_USER: 'LOGIN_USER',
  SEND_OTP: 'SEND_OTP',
  UPDATE_DETAILS: 'UPDATE_DETAILS',
  // ...
};

export const loginSagaAction = {
  triggerOtp: (payload: string) => {
    return {type: sagaLoginAction.SEND_OTP, payload};
  },
  verifyOtp: (payload: TVerifyOtpPayload) => {
    return {type: sagaLoginAction.LOGIN_USER, payload};
  },
  updateDetails: (payload: TUserDetailsPayload) => {
    return {type: sagaLoginAction.UPDATE_DETAILS, payload};
  },
  // ...
};
