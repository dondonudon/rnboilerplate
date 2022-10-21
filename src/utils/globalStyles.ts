import { StyleSheet } from 'react-native';
import { MARGIN_BOTTOM, SCREEN_WIDTH } from './constant';
import { heightPercentageToDP as hp } from './responsiveComponent';

export const globalStyles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    paddingTop: hp(2),
  },
  container: {
    flex: 1,
    paddingBottom: MARGIN_BOTTOM,
    paddingTop: 10,
  },
  content: { width: SCREEN_WIDTH, paddingHorizontal: 20 },
  textAndSwitch: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
});
