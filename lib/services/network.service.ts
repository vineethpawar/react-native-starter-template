import NetInfo, {
  NetInfoState,
  NetInfoSubscription,
} from '@react-native-community/netinfo';

/**
 * Add a listener to listen to changes in Network
 * @param callback Pass your internal logic in the callback fn which receives the NetInfoState as a param
 * @returns A function which can be called to unsubscribe.
 */
export const networkListener = (
  callback: (state: NetInfoState) => void,
): NetInfoSubscription => {
  const unsubscribe = NetInfo.addEventListener(callback);
  return unsubscribe;
};

/**
 * A function to return network connectivity status.
 * @returns Return Boolean according to connectivity status.
 */
export const isNetworkConnected = async (): Promise<boolean> => {
  try {
    const state = await NetInfo.fetch();
    return !!(
      state.isConnected &&
      (state.type === 'wifi' || state.isInternetReachable)
    );
  } catch (error) {
    console.error('Error checking network connection:', error);
    return false;
  }
};
