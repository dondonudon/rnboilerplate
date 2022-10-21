import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { connect, ConnectedProps } from 'react-redux';
import { logIn as _logIn } from '../../store/actions/currentUser';
import { COLORS, SCREEN_HEIGHT, SCREEN_WIDTH } from '../../utils/constant';
import { globalStyles } from '../../utils/globalStyles';
import { widthPercentageToDP as wp } from '../../utils/responsiveComponent';
import { AuthNavProps } from '../../utils/screenInterface';

const LoginScreen: React.FC<props> = ({}) => {
  return (
    <SafeAreaView style={[globalStyles.safeAreaContainer]}>
      <StatusBar barStyle="default" backgroundColor="#33493C" />
      <KeyboardAwareScrollView
        enableOnAndroid
        scrollEnabled
        contentContainerStyle={styles.container}
        extraHeight={SCREEN_HEIGHT / 3.5}
        keyboardOpeningTime={0}
        keyboardShouldPersistTaps="handled"
        enableResetScrollToCoords
        resetScrollToCoords={{ x: 0, y: 0 }}
      >
        <View style={styles.content}>
          <Text>Login</Text>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: 'center', width: '100%', backgroundColor: COLORS.WHITE },
  content: { flex: 1, height: SCREEN_HEIGHT, width: SCREEN_WIDTH },
  halfTop: { flex: 0.8, justifyContent: 'center', alignItems: 'center' },
  halfBot: {
    flex: 1,
    width: '100%',
    backgroundColor: COLORS.BLACK,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  img: { width: wp(50), resizeMode: 'contain', alignSelf: 'center' },
  form: {
    flex: 1,
    height: '100%',
    width: '100%',
    paddingHorizontal: 30,
  },
  eye: {
    flex: 1,
    width: wp(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const connector = connect(null, {
  login: _logIn,
});

type props = ConnectedProps<typeof connector> & AuthNavProps<'Login'>;

export default connector(LoginScreen);
