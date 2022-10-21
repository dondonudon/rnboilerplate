import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Platform } from 'react-native';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../store';
import { getCurrentUser } from '../store/selectors/currentUser';
import { COLORS, OLDER_SCREEN_RATIO } from '../utils/constant';
import { widthPercentageToDP as wp } from '../utils/responsiveComponent';
import { TabBarTypes } from '../utils/screenInterface';

const Tab = createBottomTabNavigator<TabBarTypes>();

const defaultOption: BottomTabNavigationOptions = {
  tabBarStyle: {
    position: 'absolute',
    height: 65,
    width: wp(90),
    left: wp(5),
    bottom: Platform.select({
      ios: OLDER_SCREEN_RATIO ? 5 : 20,
      android: 5,
    }),
    borderRadius: 25,
    elevation: 0,
    backgroundColor: COLORS.BLACK,
  },
  tabBarLabelStyle: {
    marginBottom: Platform.select({
      ios: OLDER_SCREEN_RATIO ? 5 : -20,
      android: 10,
    }),
  },
  tabBarIconStyle: {
    marginTop: 5,
  },
  tabBarActiveTintColor: COLORS.CYAN,
  headerShown: false,
  tabBarHideOnKeyboard: true,
};

const BottomScreenNav: React.FC<props> = ({}) => {
  return <Tab.Navigator screenOptions={defaultOption} initialRouteName="HomeStack" />;
};

const mapStateToProps = (state: RootState) => ({
  currentUser: getCurrentUser(state),
});
const connector = connect(mapStateToProps, {});
type props = ConnectedProps<typeof connector>;

export default connector(BottomScreenNav);
