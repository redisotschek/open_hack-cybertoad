import { Dimensions, StyleSheet } from 'react-native';

const DeviceWidth: number = Dimensions.get('window').width;
const DeviceHeight: number = Dimensions.get('window').height;

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
const inputHeight: number = 46;
const inputHintHeight: number = 25;
const inputIconSize: number = 36;
const inputIconPosition: number = inputHeight - inputIconSize/2;

const styles = StyleSheet.create({
  textH1: {
    fontFamily: 'Druk',
    fontSize: 28,
    fontWeight: '500',
    textAlign: 'right',
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
  centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  regularButton: {
    width: 256,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.gray5,
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
    height: inputHeight,
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
    height: inputHintHeight,
    padding: 5,
    color: colors.gray5,
  },
  inputIconContainer: {
    position: 'absolute',
    right: 0,
    top: inputIconPosition,
  },
  inputIcon: {
    width: inputIconSize,
    height: inputIconSize,
    opacity: 0.5,
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
  spacer: {
    flexGrow: 1,
  },
  imagePickerMenu: {
    width: DeviceWidth,
    position: 'absolute',
    bottom: 10,
  },
  imagePickerMenuButtons: {
    backgroundColor: colors.gray5,
    width: DeviceWidth - 20,
    borderRadius: 10,
    marginHorizontal: 10,
    marginBottom: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  hr: {
    borderBottomColor: colors.gray7,
    borderBottomWidth: 0.5,
    marginVertical: 5,
  },
  testResultsContainer: {
    width: DeviceWidth,
    padding: 20,
  },
  testValue: {
    backgroundColor: colors.gray2,
    color: colors.gray4,
    width: '100%',
    padding: 10,
    marginBottom: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


export default styles;
