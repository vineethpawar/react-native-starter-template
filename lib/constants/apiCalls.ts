export enum EReqMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  PATCH = 'PATCH',
}

export const STORAGE = {
  SESSION_ID: 'uniqueSessionId',
  loginToken: 'loginToken',
  loginExpiry: 'loginExpiry',
};

export const APPSTATES = {
  IDLE: 'idle',
  LOADING: 'loading',
  ERROR: 'error',
  SUCCESS: 'success',
};

export const ERROR_MESSAGES = {
  GENERIC_ERROR_MESSAGE: 'Something Went Wrong!',
  SERVER_RESOURCE_NOT_FOUND:
    "Oops! our system's are fluctuating. Do not worry, Best minds are at work.",
};

export const END_POINT_BASE = '<END_POINT_BASE>';
export const IMAGE_BASE = '<IMAGE_BASE>';

export const END_POINTS = {
  // ...
  // DummyEndPoint: END_POINT_BASE + '/dummyEndPoint',
  // ...
};
