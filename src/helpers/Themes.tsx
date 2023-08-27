// import { DefaultTheme } from "react-native-paper";
import { DefaultTheme } from '@react-navigation/native';
import DarkColors from './DarkColors';
import LightColors from './LightColors';

export const LightTheme = {
  ...DefaultTheme,
  dark: false,

  colors: {
    ...DefaultTheme.colors,

    appStatusBarColor: LightColors.APP_STATUS_BAR,
    appBackground: LightColors.APP_BACKGROUND,

    textColor: LightColors.TEXT_COLOR,
  },
};

export const DarkTheme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,

    appStatusBarColor: DarkColors.APP_STATUS_BAR,
    appBackground: DarkColors.APP_BACKGROUND,

    textColor: DarkColors.TEXT_COLOR,
  },
};
