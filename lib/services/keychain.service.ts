import Keychain, {
  getGenericPassword,
  setGenericPassword,
  resetGenericPassword,
} from 'react-native-keychain';
import {STORAGE} from '../constants/apiCalls';

export const saveValueToStorage = async (key: string, value: any) => {
  const options: Keychain.Options = {storage: Keychain.STORAGE_TYPE.AES};
  const credentials = await getGenericPassword(options);
  let data: any = {};
  if (credentials && credentials.password !== 'false') {
    data = {
      ...JSON.parse(credentials.password),
    };
  }
  data[key] = value;
  await setGenericPassword('AppData', JSON.stringify(data), options);
};

export const getValueFromStorage = async (key: string) => {
  const options: Keychain.Options = {storage: Keychain.STORAGE_TYPE.AES};
  let savedValues: any = await getGenericPassword(options);

  if (savedValues) {
    savedValues = JSON.parse(savedValues.password);
    return savedValues[key];
  }

  return null;
};

export const clearStorage = async () => {
  const sessionId = await getValueFromStorage(STORAGE.SESSION_ID);
  await saveValueToStorage(STORAGE.loginToken, null);
  await resetGenericPassword();
  saveValueToStorage(STORAGE.SESSION_ID, sessionId); // Saving back to keep the app session (irrespective of login session)
};
