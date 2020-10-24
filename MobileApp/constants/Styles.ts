import { Dimensions, StyleSheet } from 'react-native';

const DeviceWidth: number = Dimensions.get('window').width;

const colors = {
  black: '#1f232b',
  white: '#fff',
  blue1: '#0aceff',
  openBlue: '#02bae8',
  blue2: '#0ba2d0',

  gray1: '#F2F6F9',
  gray2: '#DDE7F0',
  gray3: '#B8C7D4',
  gray4: '#8393A3',
  gray5: '#535E6E',
  gray6: '#343944',
  gray7: '#1F232B',

  error: '#db002c',
  warning: '#FF7F00',
  success: '#00D448',
};

const styles = StyleSheet.create({
  textH1: {
    fontFamily: 'Druk',
    fontSize: 32,
    fontWeight: '500',
    textAlign: 'left',
  },
  textH2: {
    fontFamily: 'Graphik LC',
    fontSize: 28,
    fontStyle: 'normal',
    fontWeight: '500',
  },
  textH3: {
    fontFamily: 'Graphik LC',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '500',
  },
  textL: {
    fontFamily: 'Graphik LC',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '400',
  },
  textM: {
    fontFamily: 'Graphik LC',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '400',
  },
  textS: {
    fontFamily: 'Graphik LC',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
  },
  textXS: {
    fontFamily: 'Graphik LC',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
  },
  whiteText: {
    color: colors.white,
  },
  grayText: {
    color: colors.gray5,
  },
  regularButton: {
    width: 256,
    paddingVertical: 16,
    alignItems: 'center',
    backgroundColor: colors.openBlue,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  menuItemStyle: {
    width: DeviceWidth / 3,
    height: DeviceWidth / 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'rgba(158, 150, 150, .5)',
    borderWidth: 1,
  },
  noHorizontalBorder: {
    borderRightWidth: 0,
    borderLeftWidth: 0,
  },
  input: {
    backgroundColor: colors.white,
    height: 46,
    width: '100%',
    padding: 10,
  },
  inputDisabled: {
    backgroundColor: colors.gray2,
    color: colors.gray4,
  },
  inputError: {
    borderColor: colors.error,
    borderWidth: 2,
  },
  inputHint: {
    justifyContent: 'center',
    width: '100%',
    height: 25,
    padding: 5,
    color: colors.gray5,
  },
  inputHintError: {
    backgroundColor: '#FFE6EB',
  },
  errorText: {
    color: '#DB002C',
  },
  px10: {
    paddingHorizontal: 10,
  },
  pb5: {
    paddingBottom: 5,
  },
  py15: {
    paddingVertical: 15,
  },
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000050'
  },
});

export default styles;
