import { StyleSheet } from 'react-native';

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
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  menuItemStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'rgba(158, 150, 150, .5)',
    borderWidth: 1,
  },
  noHorizontalBorder: {
    borderRightWidth: 0,
    borderLeftWidth: 0,
  },
});

export default styles;
