import axios, {AxiosRequestConfig, AxiosRequestHeaders} from 'axios';
import {
  STORAGE,
  EReqMethod,
  APPSTATES,
  ERROR_MESSAGES,
} from '../constants/apiCalls';

import {isNetworkConnected} from './network.service';
import {getValueFromStorage} from './keychain.service';

type HttpServiceType = {
  url: string;
  method: EReqMethod;
  body?: any;
  baseUrlRequired?: boolean;
  header?: AxiosRequestHeaders;
  additionalHeaders?: AxiosRequestHeaders;
  useMock?: boolean;
  authRequired?: boolean;
};

export const HttpService = async (param: HttpServiceType) => {
  // @ts-ignore
  const hasNetwork = await isNetworkConnected();
  if (!hasNetwork) {
    return Promise.resolve({
      resultStatus: {
        status: 'ERROR',
        errorMessage: 'Network connection is down',
        errorCode: 408,
      },
    });
  }

  const {
    url,
    authRequired,
    method,
    body = undefined,
    header,
    // useMock = false,
    additionalHeaders = {},
  } = param;

  let headers: AxiosRequestHeaders;
  if (header !== undefined) {
    headers = header;
  } else {
    // @ts-expect-error not covering all parameters of headers
    headers = {
      'Content-type': 'application/json',
      Accept: 'application/json',
    };
  }

  if (additionalHeaders) {
    // @ts-expect-error not covering all parameters of headers
    headers = {...headers, ...additionalHeaders};
  }

  if (authRequired) {
    const credentials = await getValueFromStorage(STORAGE.loginToken);
    const accessToken = JSON?.parse(credentials)?.accessToken;
    headers['SESSION-KEY'] = accessToken;
  }

  const axiosParams: AxiosRequestConfig = {
    method: method as string,
    url,
    data: body,
    headers: headers,
  };

  const resp = await axios(axiosParams).catch((error: any) => {
    console.error(error, url);
    const errorMessage = Array.isArray(error?.response?.data)
      ? error?.response?.data
      : error?.response?.data?.message || ERROR_MESSAGES.GENERIC_ERROR_MESSAGE;
    return Promise.reject(errorMessage);
  });

  if (resp.status >= 500) {
    return Promise.reject(ERROR_MESSAGES.GENERIC_ERROR_MESSAGE);
  } else if (resp.status >= 404) {
    return Promise.reject(ERROR_MESSAGES.SERVER_RESOURCE_NOT_FOUND);
  }

  if (
    resp.status >= 200 &&
    resp.status < 300 &&
    resp.data.resultStatus === undefined
  ) {
    resp.data.resultStatus = {
      status: APPSTATES.SUCCESS,
    };
  }

  return resp.data;
};
