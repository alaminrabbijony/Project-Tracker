import {
    backgroundColor,
    BackgroundColorProps,
    border,
    BorderProps,
    BoxProps,
    color,
    ColorProps,
    createBox,
    createRestyleComponent,
    createText,
    layout,
    LayoutProps,
    spacing,
    SpacingProps,
    TextProps,
} from "@shopify/restyle";
import { ReactNode } from "react";
import {
    ScrollView as RNScrollView,
    ScrollViewProps,
    StyleProp,
    TextStyle,
    ViewStyle,
} from "react-native";
import { Theme } from "../Theme/restyle";


export const Box = createBox<Theme>();
export const Text = createText<Theme>();
//custome comp
const restyleFunctions = [layout, backgroundColor, spacing, border, color];

// Typed ScrollView
export const ScrollView = createRestyleComponent<
  SpacingProps<Theme> &
    LayoutProps<Theme> &
    BackgroundColorProps<Theme> &
    BorderProps<Theme> &
    ColorProps<Theme> &
    ScrollViewProps,
  Theme
>(restyleFunctions, RNScrollView);

//Container Comp -> view
interface containerPros extends BoxProps<Theme> {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

export const Container = ({ children, style, ...rest }: containerPros) => {
  return (
    <Box
      {...rest}
      style={style}
      flex={1}
      backgroundColor="background"
      padding="m"
    >
      {children}
    </Box>
  );
};

//Txt comp => Text

interface txtProps extends TextProps<Theme> {
  children: ReactNode;
  style?: StyleProp<TextStyle>;
}

export const TxtBody = ({ children, style, ...rest }: txtProps) => {
  return <Text {...rest} style={style} variant="body">{children}</Text>;
};

export const TxtTitle = ({ children, style, ...rest }: txtProps) => {
  return <Text {...rest} style={style} variant="header">{children}</Text>;
};