const tintColorLight = '#2f95dc';
const primaryWhite = '#fff';
const primaryBlack = '#1F232B';
const primaryBlue1 = '#0ACEFF';
const primaryBlue2 = '#0BA2D0';
const primaryOpenBlue = '#02BAE8';

const gray1 = '#F2F6F9';
const gray3 = '#B8C7D4';

const error = '#DB002C';
const warning = '#FF7F00';
const success = '#00D448';

export default {
  light: {
    text: primaryBlack,
    background: gray1,
    tint: tintColorLight,
    tabIconDefault: gray3,
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: primaryWhite,
    background: primaryBlack,
    tint: primaryWhite,
    tabIconDefault: gray3,
    tabIconSelected: primaryWhite,
  },
};
