import {Platform, Dimensions, PixelRatio} from 'react-native';

const isAndroid = (): boolean => Platform.OS === 'android';
const isIOS = (): boolean => Platform.OS === 'ios';

const screenWidth: number = Dimensions.get('window').width;
const screenHeight: number = Dimensions.get('window').height;

const designHeight: number = 800;
const designWidth: number = 360;

const viewWidth = (width: number | any): number => {
  if (!width) throw new Error('Width must be present');
  if (typeof width !== 'number') return width;
  const percent: number = (width / designWidth) * 100;
  const elementWidth: number = parseFloat(percent + '%');

  return PixelRatio.roundToNearestPixel((screenWidth * elementWidth) / 100);
};

const viewHeight = (height: number | any): number => {
  if (!height) throw new Error('Height must be present');
  if (typeof height !== 'number') return height;

  const percent: number = (height / designHeight) * 100;
  const elementHeight: number = parseFloat(percent + '%');

  return PixelRatio.roundToNearestPixel((screenHeight * elementHeight) / 100);
};

export default {
  isAndroid,
  isIOS,
  screenWidth,
  screenHeight,
  viewHeight,
  viewWidth,
};
