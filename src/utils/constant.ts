/* eslint-disable max-len */
import { API_URL } from '@env';
import { Dimensions, Platform } from 'react-native';

export const ENV = {
  API_URL,
};

export const DIMENSIONS = Dimensions.get('window');

export const SCREEN_HEIGHT = DIMENSIONS.height;
export const SCREEN_WIDTH = DIMENSIONS.width;
export const OLDER_SCREEN_RATIO = SCREEN_HEIGHT / SCREEN_WIDTH < 1.9; //16:9 screen ratio (iphone SE, 7, 8) will return true

export const MARGIN_BOTTOM = Platform.select({
  ios: OLDER_SCREEN_RATIO ? SCREEN_HEIGHT / 15 : SCREEN_HEIGHT / 15,
  android: SCREEN_HEIGHT / 12,
});

export const FONTS = {};

export const COLORS = {
  BLACK: '#212427',
  WHITE: '#FFFFFF',
  ORANGE: '#FF6433',
  CYAN: '#009CA6',
  DARK_BLUE: '#1D2671',
  DARK_GRAY: '#232325',
  GRAY: '#ABABAB',
};

export const RESOURCE_NAME = { USERS: 'users' } as const;
