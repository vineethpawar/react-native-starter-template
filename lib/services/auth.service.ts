import {STORAGE} from '../constants/apiCalls';
import {getValueFromStorage, saveValueToStorage} from './keychain.service';

const storeData = async (sessionKey: string, userData: any) => {
  const res: any = await userData;
  await saveValueToStorage(
    STORAGE.loginToken,
    JSON.stringify({
      accessToken: sessionKey,
      phone: res.phone,
      userId: res.uid,
    }),
  );
  await saveValueToStorage(STORAGE.loginExpiry, JSON.stringify(sessionKey));
};

export const isAuthenticated = async () => {
  try {
    const credentials = await getValueFromStorage(STORAGE.loginToken);
    console.log('credentials', credentials);
    const accessToken = JSON?.parse(credentials)?.accessToken;
    return !!accessToken;
  } catch (error) {
    return false;
  }
};

export {storeData};
